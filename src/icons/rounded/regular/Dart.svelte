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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0h-1.757a3.975 3.975 0 0 0-2.829 1.172l-3.242 3.242A4.022 4.022 0 0 0 11 7.242v3.463c-3.266 2.415-7.581 5.633-8.121 6.174a2.993 2.993 0 0 0-.577 3.4L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L3.714 21.7a2.965 2.965 0 0 0 3.407-.579C7.662 20.58 10.88 16.266 13.3 13h3.462a3.975 3.975 0 0 0 2.829-1.172l3.242-3.242A4.022 4.022 0 0 0 24 5.758V4a4 4 0 0 0-4-4zM5.707 19.707a1.021 1.021 0 0 1-1.414 0 1 1 0 0 1 0-1.414c.339-.336 3-2.343 5.948-4.534-2.192 2.947-4.199 5.61-4.534 5.948zM22 5.758a2.011 2.011 0 0 1-.586 1.414l-3.242 3.242a1.99 1.99 0 0 1-1.415.586h-1.986l.991-1.348 3.945-3.945a1 1 0 1 0-1.414-1.414l-3.944 3.944L13 9.229V7.242a2.011 2.011 0 0 1 .586-1.414l3.242-3.242A1.99 1.99 0 0 1 18.243 2H20a2 2 0 0 1 2 2z"/></svg>
  