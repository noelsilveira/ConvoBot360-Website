import { useState, useEffect } from 'react';

type Operation = 'increase' | 'decrease';

interface ItemObject {
  product_id: string;
  quantity: number;
  option_id?: string | null;
}

interface QuantityHandlerProps {
  initialQuantity: number;
  initialItemObject: ItemObject;
  increaseOptionQuantity: () => void;
  decreaseOptionQuantity: () => void;
}

export const useQuantityHandler = ({
  initialQuantity,
  initialItemObject,
  increaseOptionQuantity,
  decreaseOptionQuantity,
}: QuantityHandlerProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [itemObject, setItemObject] = useState<ItemObject>(initialItemObject);
  // Assuming countItems() returns the count of items

  useEffect(() => {
    setItemObject((prevItemObject) => ({
      ...prevItemObject,
      quantity: quantity,
    }));
  }, [quantity]);

  const handleUpdateQuantity = (operation: Operation) => {
    if (operation === 'increase') {
      setQuantity((prevQuantity) => prevQuantity + 1);
      increaseOptionQuantity();
    } else {
      if (quantity > 0) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        decreaseOptionQuantity();
      }
    }
  };

  const handleChangeOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setQuantity(newValue);
  };

  const handleItemObjectChange = () => {
    setItemObject((prevItemObject) => ({
      ...prevItemObject,
      quantity: quantity,
    }));
  };

  return {
    quantity,
    itemObject,
    handleUpdateQuantity,
    handleChangeOnInput,
    handleItemObjectChange,
  };
};

// export default useQuantityHandler;
