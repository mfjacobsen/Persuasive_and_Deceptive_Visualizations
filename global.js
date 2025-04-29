function loadPlot(divId, filePath) {
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(fig => {
            Plotly.newPlot(divId, fig.data, fig.layout, { responsive: true });
        })
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    loadPlot('plot1', 'figures/against_nypd_misconduct.json');
    loadPlot('plot2', 'figures/for_nypd_misconduct.json');
});