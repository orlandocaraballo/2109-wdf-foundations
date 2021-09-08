class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }

  sale(id) {
    this.inventory[id].stock--;
    return `1 ${this.inventory[id].name} - Thank you and come again!`;
  }

  stockTotal() {
    let total = Object.values(this.inventory).reduce(
      (total, item) => total + item.stock,
      0
    );

    if (total > 0) {
      return `${total} item(s)`;
    } else {
      return 'Out of Stock';
    }
  }
}

const drinkVendingMachine = new VM({
  1: { name: 'Sunny Delight', stock: 5 },
  2: { name: 'Diet Soda', stock: 3 },
  3: { name: 'Bottled Water', stock: 4 },
});

const snackVendingMachine = new VM({
  1: { name: 'Pringles', stock: 0 },
  2: { name: 'M&Ms', stock: 0 },
  3: { name: 'KitKat', stock: 0 },
});

drinkVendingMachine.stockTotal();