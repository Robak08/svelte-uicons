<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M174.376 479.018c44.884 43.908 116.571 44.088 161.674.405l85-78.548c92.079-90.853 93.072-239.148 2.22-331.227s-239.148-93.073-331.227-2.22a232.33 232.33 0 0 0-2.22 2.22c-91.46 91.475-91.448 239.774.027 331.234.19.19.379.379.57.567l83.956 77.569zM119.931 99.755c74.673-75.008 196.014-75.28 271.022-.607s75.28 196.014.607 271.022l-84.851 78.399c-28.975 27.269-74.221 27.101-102.992-.383l-83.786-77.42c-74.838-74.837-74.838-196.172-.002-271.01l.002-.001zm29.043 135.506c0-11.76 9.533-21.293 21.293-21.293h170.34c11.76 0 21.293 9.533 21.293 21.293s-9.533 21.293-21.293 21.293h-170.34c-11.76-.001-21.293-9.534-21.293-21.293z"/></svg>
  