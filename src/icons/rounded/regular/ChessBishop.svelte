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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 22h-1.35A8.985 8.985 0 0 0 21 15c0-4.677-5.961-9.848-7.846-11.367A2 2 0 1 0 10.8 3.6C8.786 5.009 3 9.531 3 15a8.985 8.985 0 0 0 3.35 7H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 15c0-4.485 5.2-8.526 6.958-9.765a33.425 33.425 0 0 1 3.4 3.172l-4.127 4.952a1 1 0 0 0 1.536 1.282l3.913-4.695C18 11.619 19 13.423 19 15a7 7 0 0 1-14 0Z"/></svg>
  