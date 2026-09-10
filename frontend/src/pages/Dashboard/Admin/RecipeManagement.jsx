import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';

const RecipeManagement = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [calories, setCalories] = useState('');

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await api.get('/recipes');
            setRecipes(response.data);
        } catch (error) {
            console.error("Error fetching recipes", error);
        } finally {
            setLoading(false);
        }
    };

    const addRecipe = async (e) => {
        e.preventDefault();
        try {
            await api.post('/recipes', {
                title, description, ingredients, instructions,
                prepTimeMinutes: parseInt(prepTime), calories: parseInt(calories)
            });
            setTitle(''); setDescription(''); setIngredients(''); setInstructions('');
            setPrepTime(''); setCalories('');
            fetchRecipes();
        } catch (error) {
            console.error("Error adding recipe", error);
        }
    };

    const deleteRecipe = async (id) => {
        if(window.confirm("Delete this recipe?")) {
            try {
                await api.delete(`/recipes/${id}`);
                fetchRecipes();
            } catch (error) {
                console.error("Error deleting recipe", error);
            }
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6">Recipe Management</h1>
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
                <h2 className="text-xl mb-4 font-semibold text-white/80">Add New Recipe</h2>
                <form onSubmit={addRecipe} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Title" required value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green" />
                        <input type="text" placeholder="Description" required value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green" />
                        <input type="number" placeholder="Prep Time (mins)" required value={prepTime} onChange={e => setPrepTime(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green" />
                        <input type="number" placeholder="Calories" required value={calories} onChange={e => setCalories(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green" />
                    </div>
                    <div>
                        <textarea placeholder="Ingredients (comma separated)" required value={ingredients} onChange={e => setIngredients(e.target.value)} className="w-full h-24 bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green"></textarea>
                    </div>
                    <div>
                        <textarea placeholder="Instructions" required value={instructions} onChange={e => setInstructions(e.target.value)} className="w-full h-24 bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green"></textarea>
                    </div>
                    <button type="submit" className="px-6 py-3 bg-accent-green hover:bg-green-600 text-white font-semibold rounded-lg transition-colors">Add Recipe</button>
                </form>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white/80">Available Recipes</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : recipes.length === 0 ? (
                    <p className="text-white/50">No recipes added yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recipes.map(recipe => (
                            <div key={recipe.id} className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row justify-between items-start gap-2">
                                <div>
                                    <h3 className="font-bold text-lg text-accent-green">{recipe.title}</h3>
                                    <p className="text-white/60 text-sm mt-1">{recipe.description}</p>
                                    <p className="text-white/40 text-xs mt-2">{recipe.calories} kcal • {recipe.prepTimeMinutes} mins</p>
                                </div>
                                <button onClick={() => deleteRecipe(recipe.id)} className="text-red-400 hover:text-red-300 sm:ml-4">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeManagement;
