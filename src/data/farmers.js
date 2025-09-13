import { locationData } from './locationData';

const sampleProducts = [
  { name: "Rice", category: "grain" },
  { name: "Wheat", category: "grain" },
  { name: "Cotton", category: "other" },
  { name: "Sugarcane", category: "other" },
  { name: "Mangoes", category: "fruit" },
  { name: "Bananas", category: "fruit" },
  { name: "Coconuts", category: "fruit" },
  { name: "Spices", category: "other" },
  { name: "Tea", category: "other" },
  { name: "Coffee", category: "other" },
  { name: "Pulses", category: "legume" },
  { name: "Mixed Vegetables", category: "vegetable" }
];

const sampleOwners = ["The Patel Family", "The Kumar Group", "S. Reddy Farms", "The Singh Collective", "Gupta Organics", "The Sharma Household", "Mishra & Sons", "The Das Co-op"];
const sampleFarmNameAdjectives = ["Green", "Sunrise", "Golden", "Riverbend", "Hilltop", "Deccan", "Coastal", "Valley", "Monsoon"];
const sampleFarmNameNouns = ["Fields", "Harvest", "Acres", "Orchards", "Farms", "Plantation", "Grove", "Pastures"];

const generateAllFarmers = () => {
  const allFarmers = [];
  let farmerId = 1;

  for (const state in locationData) {
    for (const district of locationData[state]) {
      
      const newFarmer = {
        id: farmerId,
        farm_name: `${district} ${sampleFarmNameAdjectives[farmerId % sampleFarmNameAdjectives.length]} ${sampleFarmNameNouns[farmerId % sampleFarmNameNouns.length]}`,
        owner_name: sampleOwners[farmerId % sampleOwners.length],
        
        // --- THIS IS THE FIX ---
        // 1. We use backticks `` `...` `` to correctly insert the district and state variables.
        // 2. We wrap the entire text in <strong> HTML tags to make it bold.
        story: `<strong>A dedicated farm in the heart of ${district}, ${state}, committed to sustainable and traditional farming practices.</strong>`,
        // --- END OF FIX ---

        products: [
          sampleProducts[farmerId % sampleProducts.length],
          sampleProducts[(farmerId + 1) % sampleProducts.length],
          sampleProducts[(farmerId + 2) % sampleProducts.length]
        ],

        location: state,
        district: district,
        latitude: 20.5937, 
        longitude: 78.9629 
      };

      allFarmers.push(newFarmer);
      farmerId++;
    }
  }
  return allFarmers;
};

// Generate the data and export it for our app to use.
export const farmersData = generateAllFarmers();