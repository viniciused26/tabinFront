import { tabinAPI } from "./apiConnection";

const tabinService = {
    getMealTypes: async(token) => {
        const res = await tabinAPI.get("/restaurant/getMealTypes", {
            headers: {
              'auth-token': token,
            }
          });
        
        return res.data;
    },
    getMealsOfRestaurant: async(restaurantName) => {
        const res = await tabinAPI.get(`/meal/listRestaurantMeals/${restaurantName}`);
        
        return res.data;
    },
    newMeal: async(mealData, token) => {
        const res = await tabinAPI.post("/meal/register", mealData, {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    login: async(email, pass) => {
        const res = await tabinAPI.post("/auth/login", {
            email: email,
            password: pass
        });
        
        return res.data;
    },
    getRestaurantMeals: async(restaurant) => {
        const res = await tabinAPI.get(`/meal/listRestaurantMeals/${restaurant}`);

        return res.data;
    },
    getRestaurantMealsByType: async(restaurant, mealTypes) => {
        const res = await tabinAPI.get(`/meal/listRestaurantMealsByType/${restaurant}/${mealTypes}`);

        return res.data;
    },
    getRestaurantByName: async(restaurant) => {
        const res = await tabinAPI.get(`/restaurant/listByName/${restaurant}`);

        return res.data;
    },
    getOwnerRestaurant: async(token) => {
        const res = await tabinAPI.get("/restaurant/listByOwner", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    getLoggedUser: async(token) => {
        const res = await tabinAPI.get("/user/loggedUser", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    getRestaurantIdByOwner: async(token) => {
        const res = await tabinAPI.get("/restaurant/getRestaurantIdByOwner", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    listRestaurantTables: async(restaurant) => {
        const res = await tabinAPI.get(`/table/listRestaurantTables/${restaurant}`);

        return res.data;
    },
    tableRegister: async(ident, token) => {
        const tableData = {
            identifier: ident
        };

        const res = await tabinAPI.post("/table/register", tableData, {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    registerUser: async(token) => {
        const res = await tabinAPI.get("/user/loggedUser", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    getRestaurantManager: async(token) => {
        const res = await tabinAPI.get("/restaurant/getManagerInfo", {
            headers: {
                'auth-token': token,
            }
        });

        return res.data;
    },
    askHelp: async(restaurant, table) => {
        const res = await tabinAPI.post(`/table/askService/${restaurant}/${table}`);

        return res.data;
    },

}

export { tabinService };