# 🎉 Elementor Tabs Without Pro – Custom WordPress Shortcode

Create dynamic, tabbed content for your WordPress site using a custom shortcode, **without needing Elementor Pro**! This solution is lightweight, reusable, and 100% free of additional plugins.

No Pro license? No problem! With this simple shortcode and a bit of JavaScript, you can replicate Elementor Pro’s Tab Widget while maintaining fast, efficient performance.

## 🧩 Features
- **No Elementor Pro required**
- **Customizable tabbed content**
- **Simple integration** with shortcodes and a few lines of JS
- **Reusable** for multiple tabs across your site
- **No extra plugins** needed
- **Clean and fast** – minimalistic approach for a smooth user experience

## Tutorial & Demo
Want to see the tutorial in action?
https://www.linkedin.com/feed/update/urn:li:activity:7320841685247180801/

## Required CSS
```/* Hide all tabs by default */
.tab-content {
  display: none;
}

/* Show the active tab */
.active {
  display: inline-block;
}

/* Style the active tab button */
.btn-active {
  background-color: #0073e6;
  color: white;
  border: none;
}

/* Style the tab buttons */
.tab-btn {
  padding: 10px 20px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  cursor: pointer;
}

.tab-btn:hover {
  background-color: #e9e9e9;
}


## Customization Tips
Button styling: 
Feel free to adjust the .tab-btn CSS for your desired look and feel.

Active tab indicator: 
The .btn-active class is used to visually highlight the active tab. You can change the color or transition effects.

Content layout: 
Each .tab-content section can contain anything from simple text to complex widgets, making this solution perfect for various types of content.

