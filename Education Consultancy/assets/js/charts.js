/**
 * GlobalPath Education - Charts & Analytics Engine
 * Powered by Chart.js. Fully responsive & dynamically adapts to Dark/Light mode.
 */

window.GPCharts = {
  instances: {},

  getThemeColors() {
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    return {
      textColor: isDark ? '#94a3b8' : '#64748b',
      gridColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
      primary: '#1d4ed8',
      primaryLight: isDark ? 'rgba(29, 78, 216, 0.25)' : 'rgba(29, 78, 216, 0.15)',
      accent: '#06b6d4',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444'
    };
  },

  initAdminDashboard() {
    if (typeof Chart === 'undefined') return;

    const colors = this.getThemeColors();

    // 1. Student Registrations Trend Chart (Line)
    const regCtx = document.getElementById('chartStudentTrends');
    if (regCtx) {
      this.instances.registrations = new Chart(regCtx, {
        type: 'line',
        data: {
          labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar (Est)'],
          datasets: [{
            label: '2025/2026 Cohort',
            data: [120, 185, 240, 310, 420, 560, 680],
            borderColor: colors.primary,
            backgroundColor: colors.primaryLight,
            fill: true,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: colors.primary
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
            y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } }
          }
        }
      });
    }

    // 2. Application Trends by Destination (Bar)
    const appCtx = document.getElementById('chartApplicationsByCountry');
    if (appCtx) {
      this.instances.destinations = new Chart(appCtx, {
        type: 'bar',
        data: {
          labels: ['UK', 'USA', 'Canada', 'Australia', 'Germany', 'Ireland'],
          datasets: [
            {
              label: 'Offers Received',
              data: [85, 62, 74, 58, 45, 30],
              backgroundColor: '#1d4ed8',
              borderRadius: 6
            },
            {
              label: 'Visa Approved',
              data: [78, 55, 68, 52, 42, 28],
              backgroundColor: '#10b981',
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: colors.textColor } }
          },
          scales: {
            x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
            y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } }
          }
        }
      });
    }

    // 3. Country Distribution (Doughnut)
    const distCtx = document.getElementById('chartCountryDistribution');
    if (distCtx) {
      this.instances.distribution = new Chart(distCtx, {
        type: 'doughnut',
        data: {
          labels: ['United Kingdom', 'Canada', 'United States', 'Australia', 'Germany', 'Others'],
          datasets: [{
            data: [32, 24, 20, 14, 6, 4],
            backgroundColor: [
              '#1d4ed8',
              '#06b6d4',
              '#3b82f6',
              '#10b981',
              '#f59e0b',
              '#94a3b8'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: colors.textColor, boxWidth: 12 }
            }
          },
          cutout: '70%'
        }
      });
    }

    // 4. Revenue Monthly Trend
    const revCtx = document.getElementById('chartRevenueTrend');
    if (revCtx) {
      this.instances.revenue = new Chart(revCtx, {
        type: 'bar',
        data: {
          labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
          datasets: [{
            label: 'Monthly Revenue ($)',
            data: [28400, 36200, 44800, 52000, 68900, 84300],
            backgroundColor: '#06b6d4',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } },
            y: { grid: { color: colors.gridColor }, ticks: { color: colors.textColor } }
          }
        }
      });
    }
  },

  updateTheme() {
    const colors = this.getThemeColors();
    Object.values(this.instances).forEach(chart => {
      if (chart.options.scales) {
        if (chart.options.scales.x) {
          chart.options.scales.x.grid.color = colors.gridColor;
          chart.options.scales.x.ticks.color = colors.textColor;
        }
        if (chart.options.scales.y) {
          chart.options.scales.y.grid.color = colors.gridColor;
          chart.options.scales.y.ticks.color = colors.textColor;
        }
      }
      if (chart.options.plugins && chart.options.plugins.legend) {
        if (chart.options.plugins.legend.labels) {
          chart.options.plugins.legend.labels.color = colors.textColor;
        }
      }
      chart.update();
    });
  }
};

// Re-render chart styles on theme toggle
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('chartStudentTrends')) {
    window.GPCharts.initAdminDashboard();
  }
  const themeObserver = new MutationObserver(() => {
    window.GPCharts.updateTheme();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });
});
