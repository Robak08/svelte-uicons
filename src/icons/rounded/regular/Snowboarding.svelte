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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.432 20.4a1 1 0 0 0-1.334.469 2.01 2.01 0 0 1-2.695.926L17 20.727v-4.849a3.008 3.008 0 0 0-.968-2.207l-1.954-1.8c-.026-.022-.038-.062-.065-.082l2.161-2.947 6.289 4a1 1 0 0 0 1.074-1.687L13.519 4.782A5 5 0 0 0 10.835 4H9.657a2.982 2.982 0 0 1-2.122-.878L5.707 1.293a1 1 0 0 0-1.414 1.415l1.828 1.828A4.968 4.968 0 0 0 9.657 6h1.156L8.621 8.852A3.012 3.012 0 0 0 8 10.681v2.084a.994.994 0 0 1-.553.894l-2.9 1.447a.877.877 0 0 0-.09.071L3.16 14.6a2 2 0 0 1-.975-2.656A1 1 0 0 0 .371 11.1a4.009 4.009 0 0 0 1.963 5.318l16.231 7.185A4 4 0 0 0 23.9 21.73a1 1 0 0 0-.468-1.33ZM8.341 15.448A2.983 2.983 0 0 0 10 12.765v-2.084a1 1 0 0 1 .207-.61L12.8 6.7l1.682 1.07-2.07 2.824a2 2 0 0 0 .341 2.782l1.923 1.771a1 1 0 0 1 .323.735v3.963l-8.191-3.63ZM14.911 2.5a2.5 2.5 0 1 1 2.5 2.5 2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
  