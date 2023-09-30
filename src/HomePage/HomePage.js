import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';
import budgetData from '../budget-data.json';

function HomePage() {
  const [budgetData, setBudgetData] = useState(null);

  useEffect(() => {
    // Axios data fetching code for budget data
    Axios.get('http://localhost:3000/budget') // Replace with your server URL
      .then((response) => {
        // Handle data here
        setBudgetData(response.data);

        // Chart.js code
        const data = response.data;
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar', // Change chart type as needed
          data: {
            labels: data.labels, // Replace with your data labels
            datasets: [
              {
                label: 'Your Data',
                data: data.values, // Replace with your data values
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize chart colors
                borderColor: 'rgba(75, 192, 192, 1)', // Customize chart colors
                borderWidth: 1, // Customize chart colors
              },
            ],
          },
          options: {
            // Customize chart options as needed
          },
        });
      })
      .catch((error) => {
        // Handle error here
        console.error('Error fetching data:', error);
      });

    // D3.js code
    // You can use D3.js here to create data visualizations
  }, []);

  return (
    <main className="center" id="main">
      <article className="page-area">
        <div>
          <h1>Homepage</h1>
          <Link to="/settings">Go to Settings</Link>
        </div>

        <div className="text-box">
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </div>

        <div className="text-box">
          <h1>Alerts</h1>
          <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </div>

        <div className="text-box">
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they live happier lives... since they expend without guilt or fear...
            because they know it is all good and accounted for.
          </p>
        </div>

        <div className="text-box">
          <h1>Free</h1>
          <p>
            <canvas id="myChart" width="400" height="400"></canvas>
          </p>
        </div>

        <div id="d3ChartContainer">
          {/* Add your D3.js visualizations here */}
        </div>
      </article>
    </main>
  );
}

export default HomePage;
