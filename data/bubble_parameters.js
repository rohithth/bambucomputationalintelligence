var BUBBLE_PARAMETERS = {
    "data_file": "largest_cities.csv",
    "report_title": "Bambu Computational Intelligence",
    "footer_text": "Computational Algorithm for Conviction List Insights. Beta 1.0",
    "width": 940,
    "height": 700,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "Price Momentum LT Rank",
    "numeric_fields": ["Price Momentum LT Rank", "Pct away from Target Price", "Dividend Yield","Area", "Population", "Density", "Price Momentum ST Rank", "Last Close", "1yr Total Return", "1 Mth Total Return","Colouring"],
    "fill_color": {
        "data_field": "1 Mth Price change",
        "color_groups": {
            "Negative Return": "#d84b2a",
            "Between 0 and 10% Return": "#beccae",
            "Return Greater than 10%": "#7aa25c"
        }
    },
    "tooltip": [
        {"title": "Stock", "data_field": "Stock"},
      //  {"title": "Country", "data_field": "Country"},
        {"title": "Sector", "data_field": "Sector"},
        {"title": "Last Close", "data_field": "Last Close", "format_string": ""},
        {"title": "Pct away from Target Price", "data_field": "Pct away from Target Price", "format_string": ".0%"},
        {"title": "1 Yr Total Return", "data_field": "1yr Total Return", "format_string": ".0%"},
        {"title": "1 Mth Total Return", "data_field": "1 Mth Total Return", "format_string": ".0%"},
        {"title": "Dividend Yield", "data_field": "Dividend Yield", "format_string": ".0%"},
        {"title": "Price Momentum LT Rank", "data_field": "Price Momentum LT Rank", "format_string": ",.2r"},
        {"title": "Price Momentum ST Rank", "data_field": "Price Momentum ST Rank", "format_string": ",.2r"},
//        {"title": "Population", "data_field": "Population", "format_string": ",.2r"},
//        {"title": "Area (km^2)", "data_field": "Area", "format_string": ",.2r"},
//        {"title": "Density (pop / km^2)", "data_field": "Density"}
    ],
    "modes": [
        {
            "button_text": "Equity Universe",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Sector Classification",
            "button_id": "region",
            "type": "grid",
            "labels": ["Financials", "Energy", "Materials", "Consumer Discretionary", "Consumer Staples", "Technology", "Telco", "Industrials", "Health Care", "Real Estate", "Utilities"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Sector"
        },
        {
            "button_text": "Country Concentration",
            "button_id": "Country",
            "type": "grid",
            "labels": ["US", "China", "Hong Kong", "Singapore", "United Kingdom", "Netherlands", "Switzerland", "Germany", "Japan", "Macau", "France"],
            "grid_dimensions": {"rows": 3, "columns": 4},
            "data_field": "Country"
        },
        {
            "button_text": "Return Cluster",
            "button_id": "1 Mth Price change",
            "type": "grid",
            "labels": ["Negative Return", "Between 0 and 10% Return", "Return Greater than 10%"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "1 Mth Price change"
        },
        {
            "button_text": "Computational Equity Scoring",
            "button_id": "area_vs_population",
            "type": "scatterplot",
            "x_data_field": "Price Momentum ST Rank",
            "y_data_field": "Price Momentum LT Rank",
            "x_format_string": ".0%",
            "y_format_string": ".0%"
        },
        {
            "button_text": "Dividend Basket",
            "type": "grid",
            "button_id": "Dividend Yield greater than 5pc",
            "labels": ["Greater than 5% Yield", "Less than 5% Yield", "No Dividend"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "Dividend Yield greater than 5pc"
        },
        {
            "button_text": "Performance Review",
            "type": "grid",
            "button_id": "Quartile",
            "labels": ["1st Quartile", "2nd Quartile", "3rd Quartile", "4th Quartile"],
            "grid_dimensions": {"rows": 1, "columns": 4},
            "data_field": "Quartile"
        }
    //    {
  //          "button_text": "World Map",
  //          "button_id": "world_map",
  //          "type": "map",
  //          "latitude_field": "Latitude",
  //          "longitude_field": "Longitude"
  //      }
    ]
};
