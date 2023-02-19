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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-restroom-simple {customClass}"><path d="M16.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm6.854 17.481a2.95 2.95 0 0 1-1.354.873v2.145a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2.145a2.961 2.961 0 0 1-1.354-.873 2.535 2.535 0 0 1-.622-2.036l1.348-8.796C15.58 7.63 16.925 6 19 6s3.42 1.631 3.63 3.165l1.344 8.766.002.015a2.535 2.535 0 0 1-.622 2.036Zm-7.199-1.314c.182.209.483.333.807.333h4.078c.323 0 .625-.124.807-.333a.563.563 0 0 0 .149-.443l-1.344-8.771c-.084-.612-.65-1.452-1.651-1.452s-1.567.84-1.649 1.437l-1.348 8.797c-.025.183.068.338.151.434ZM4 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm4 5v5c0 .886-.387 1.684-1 2.234V23a1 1 0 1 1-2 0v-5H3v5a1 1 0 1 1-2 0v-5.766c-.613-.55-1-1.347-1-2.234v-5c0-2.206 1.794-4 4-4s4 1.794 4 4Zm-3 6a1 1 0 0 0 1-1v-5c0-1.103-.897-2-2-2s-2 .897-2 2v5a1 1 0 0 0 1 1h2Zm6-16a1 1 0 0 0-1 1v22a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"/></svg>
  