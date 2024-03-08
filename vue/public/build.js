new Vue({
    el: '#app',
    data: {
        description: '',
        amount: null,
        category: 'Food',
        expenses: []
    },
    computed: {
        totalExpense() {
            return this.expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);
        },
        foodTotal() {
            return this.calculateTotalByCategory('Food');
        },
        transportationTotal() {
            return this.calculateTotalByCategory('Transportation');
        },
        shoppingTotal() {
            return this.calculateTotalByCategory('Shopping');
        },
        entertainmentTotal() {
            return this.calculateTotalByCategory('Entertainment');
        },
        othersTotal() {
            return this.calculateTotalByCategory('Others');
        }
    },
    methods: {
        addExpense() {
            if (this.description.trim() !== '' && this.amount !== null) {
                this.expenses.push({
                    description: this.description,
                    amount: this.amount,
                    category: this.category
                });
                this.saveExpenses();
                this.description = '';
                this.amount = null;
                this.category = 'Food';
            }
        },
        saveExpenses() {
            localStorage.setItem('expenses', JSON.stringify(this.expenses));
        },
        loadExpenses() {
            const storedExpenses = localStorage.getItem('expenses');
            if (storedExpenses) {
                this.expenses = JSON.parse(storedExpenses);
            }
        },
        calculateTotalByCategory(category) {
            return this.expenses.reduce((total, expense) => {
                return expense.category === category ? total + parseInt(expense.amount) : total;
            }, 0);
        },
        updateChart() {
            // Get category-wise expenses
            const categoryExpenses = this.expenses.reduce((acc, curr) => {
                acc[curr.category] = (acc[curr.category] || 0) + parseInt(curr.amount);
                return acc;
            }, {});

            // Create or update Chart.js instance
            if (this.chart) {
                // Update chart data
                this.chart.data.labels = Object.keys(categoryExpenses);
                this.chart.data.datasets[0].data = Object.values(categoryExpenses);
                this.chart.update();
            } else {
                // Create new chart
                this.chart = new Chart(document.getElementById('expenseChart'), {
                    type: 'bar',
                    data: {
                        labels: Object.keys(categoryExpenses),
                        datasets: [{
                            label: 'Expense Amount',
                            data: Object.values(categoryExpenses),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            }
        }
    },
    mounted() {
        this.loadExpenses();
        this.updateChart();
    }
});
