export const validateCategory = (category) => {
  if (!category.id || !category.name || !category.budget || !category.timestamp) {
    throw new Error('VALIDATION ERROR: category must include id, name, budget, and timestamp.');
  }
}

export const validateExpense = (expense) => {
  if (!expense.id || !expense.timestamp || !expense.price || !expense.categoryId) {
    throw new Error('VALIDATION ERROR: expense must include id, timestamp, price, and category id');
  }
}