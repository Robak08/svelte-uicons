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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 4.052a12 12 0 0 0-16.388 17.52A4.993 4.993 0 0 0 7.12 23h9.767a4.84 4.84 0 0 0 3.354-1.288A12.053 12.053 0 0 0 20 4.052Zm-1.132 16.207a2.862 2.862 0 0 1-1.981.741H7.12a3 3 0 0 1-2.11-.858 10 10 0 1 1 13.858.117Zm.2-7.269a1 1 0 0 1-1.132-.848A6.022 6.022 0 0 0 12 7c-5.268-.1-8.04 6.686-4.193 10.285a1 1 0 0 1-1.4 1.43C1.287 13.848 4.939 4.915 12 5a8.035 8.035 0 0 1 7.919 6.858 1 1 0 0 1-.849 1.132Zm.3 3.244a1 1 0 0 1-1.318.514l-4.867-2.136a2 2 0 1 1 .8-1.832l4.867 2.136a1 1 0 0 1 .519 1.318Z"/></svg>
  