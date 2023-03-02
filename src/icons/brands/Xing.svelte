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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3.646 4.745c-.208 0-.377.077-.465.22-.091.148-.097.321 0 .514l2.348 4.06a.025.025 0 0 1 0 .024l-3.668 6.481c-.096.191-.091.39 0 .538a.496.496 0 0 0 .44.245h3.473c.518 0 .752-.365.929-.685l3.742-6.603L8.072 5.38c-.172-.306-.447-.635-.978-.635H3.646zM18.186 0c-.517 0-.741.326-.927.659L9.557 14.317l4.918 9.023c.172.308.437.66.967.66H18.9c.208 0 .371-.079.459-.221.092-.148.09-.343-.007-.535l-4.88-8.915a.024.024 0 0 1 0-.023L22.136.755c.096-.191.098-.386.007-.534-.088-.142-.252-.221-.46-.221h-3.497z"/></svg>
  