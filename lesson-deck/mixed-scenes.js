/* Mixed-сцени: пари графіків для модуля 8. Кожна сцена = {type:'mixed', title, parts:[...]} (див. mixed.js).
   EV: line + pie (модель A) · BT: bar + table (модель B) · ST1: bar + pie (Пишемо разом 1) · ST2: line + table (Пишемо разом 2) · CL: line + bar (диктант).
   Усі цифри в текстах звірені з цими даними. */
(function () {
  var PIE = ['#1E5C45', '#C0942E', '#4F7A8C', '#BE3A24', '#8E8E8E'];
  window.MXSC = {
    EV: { type: 'mixed', title: 'Electric cars in Europe: sales 2015–2022 and brand shares in 2022',
      parts: [
        { key: 'a', type: 'line', title: 'Electric car sales in Europe (thousands)', xTitle: 'Year', yTitle: 'Sales (thousands)', xLabels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'], yMax: 1000, yStep: 250,
          series: [{ id: 'ev', name: 'Electric car sales', color: '#1A3A2D', marker: 'circle', data: [50, 80, 120, 180, 260, 380, 590, 800] }] },
        { key: 'b', type: 'pie', title: 'Share of sales by brand, 2022 (%)',
          charts: [{ id: 'y22', name: '2022', slices: [
            { id: 'tes', label: 'Tesla', value: 35, color: PIE[0] }, { id: 'vw', label: 'Volkswagen', value: 25, color: PIE[1] },
            { id: 'ren', label: 'Renault', value: 15, color: PIE[2] }, { id: 'oth', label: 'Others', value: 25, color: '#C9C9C9', txt: '#333' }] }] }] },

    BT: { type: 'mixed', title: 'Tourism: visitors by region, 2012 and 2022, and spending in 2022',
      parts: [
        { key: 'a', type: 'bar', title: 'Visitors by type of region (millions)', yTitle: 'Visitors (millions)', yMax: 40, yStep: 10,
          cats: ['Coast', 'City', 'Mountains', 'Countryside'],
          series: [{ id: 'y12', name: '2012', color: '#4F7A8C', data: [18, 22, 6, 9] }, { id: 'y22', name: '2022', color: '#1E5C45', data: [24, 31, 9, 8] }] },
        { key: 'b', type: 'table', title: 'Visitor behaviour by region, 2022', corner: '2022', cols: ['Coast', 'City', 'Mountains', 'Countryside'],
          rows: [{ label: 'Average stay (nights)', data: [6.1, 3.2, 5.4, 4.5] }, { label: 'Daily spend per visitor (£)', data: [78, 135, 92, 64] }] }] },

    ST1: { type: 'mixed', title: 'Online shopping: sales by category and devices used',
      parts: [
        { key: 'a', type: 'bar', title: 'Online sales by product category (£ billion)', yTitle: '£ billion', yMax: 25, yStep: 5, pre: '£',
          cats: ['Clothing', 'Electronics', 'Groceries', 'Books & media', 'Furniture'],
          series: [{ id: 'y15', name: '2015', color: '#4F7A8C', data: [9, 12, 3, 7, 2] }, { id: 'y22', name: '2022', color: '#1E5C45', data: [18, 21, 15, 4, 8] }] },
        { key: 'b', type: 'pie', title: 'Devices used to place online orders, 2022 (%)',
          charts: [{ id: 'dev', name: '2022', slices: [
            { id: 'ph', label: 'Smartphone', value: 52, color: PIE[0] }, { id: 'pc', label: 'Laptop / PC', value: 31, color: PIE[1] },
            { id: 'tb', label: 'Tablet', value: 12, color: PIE[2] }, { id: 'ot', label: 'Other', value: 5, color: '#C9C9C9', txt: '#333' }] }] }] },

    ST2: { type: 'mixed', title: 'Two cities: unemployment 2016–2022 and jobs by sector in 2022',
      parts: [
        { key: 'a', type: 'line', title: 'Unemployment rate (%)', xTitle: 'Year', yTitle: 'Unemployment (%)', xLabels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'], yMax: 10, yStep: 2,
          series: [{ id: 'cal', name: 'Calder', color: '#E8530F', marker: 'diamond', data: [8.5, 7.8, 7.0, 6.2, 8.8, 7.4, 5.9] }, { id: 'mer', name: 'Merrow', color: '#2C6E8A', marker: 'circle', data: [5.2, 5.0, 4.8, 4.5, 6.9, 6.0, 5.1] }] },
        { key: 'b', type: 'table', title: 'Workers by sector, 2022 (%)', corner: '% of workers', cols: ['Calder', 'Merrow'],
          rows: [{ label: 'Services', data: [58, 72] }, { label: 'Manufacturing', data: [27, 14] }, { label: 'Construction', data: [9, 10] }, { label: 'Agriculture', data: [6, 4] }] }] },

    CL: { type: 'mixed', title: 'Climate in two towns: monthly temperature and seasonal rainfall',
      parts: [
        { key: 'a', type: 'line', title: 'Average monthly temperature (°C)', xTitle: 'Month', yTitle: 'Temperature (°C)', xLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], yMax: 30, yStep: 5,
          series: [{ id: 'co', name: 'Coastal town', color: '#E8530F', marker: 'circle', data: [9, 10, 12, 14, 17, 21, 24, 24, 21, 17, 12, 10] }, { id: 'mo', name: 'Mountain town', color: '#2C6E8A', marker: 'diamond', data: [2, 3, 5, 8, 12, 16, 19, 18, 14, 10, 5, 3] }] },
        { key: 'b', type: 'bar', title: 'Average rainfall by season (mm)', yTitle: 'Rainfall (mm)', yMax: 300, yStep: 100,
          cats: ['Winter', 'Spring', 'Summer', 'Autumn'],
          series: [{ id: 'co', name: 'Coastal town', color: '#E8530F', data: [190, 120, 40, 150] }, { id: 'mo', name: 'Mountain town', color: '#2C6E8A', data: [260, 210, 130, 240] }] }] }
  };
})();
