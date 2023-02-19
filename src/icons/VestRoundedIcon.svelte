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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-vest {customClass}"><path d="M22.12 10.504C21.408 9.473 21 8.561 21 8V5.065A4.975 4.975 0 0 0 16.557.096C16.501.09 15.77 0 15 0H9c-.692 0-1.5.09-1.557.096A4.975 4.975 0 0 0 3 5.065V8c0 .561-.408 1.473-1.12 2.504a4.95 4.95 0 0 0-.88 2.83V19c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5v-5.666a4.948 4.948 0 0 0-.88-2.83ZM12 9.074 9.427 2h5.145l-2.573 7.074ZM3 19v-2h4a1 1 0 1 0 0-2H3v-1.666c0-.611.182-1.196.524-1.693C4.503 10.224 5 8.999 5 8V5.065c0-1.432.99-2.641 2.349-2.931L11 12.175V22H6c-1.654 0-3-1.346-3-3Zm15 3h-5v-9.825l3.651-10.041A2.983 2.983 0 0 1 19 5.065V8c0 .999.496 2.224 1.476 3.641.343.497.524 1.083.524 1.693V15h-4a1 1 0 1 0 0 2h4v2c0 1.654-1.346 3-3 3Z"/></svg>
  