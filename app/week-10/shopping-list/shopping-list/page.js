import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NewItem from "./new-item";
import { ItemList } from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  const loadItems = useCallback(async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    } else {
      loadItems();
    }
  }, [user, router, loadItems]);

  const handleAddItem = async (item) => {
    if (user) {
      const itemId = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { id: itemId, ...item }]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanItemName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanItemName);
  };

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <main className="p-6 flex">
      <div>
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1 p-6">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
};

export default Page;
