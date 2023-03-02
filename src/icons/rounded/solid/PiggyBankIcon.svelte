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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.432 11.046A8.055 8.055 0 0 0 21 8.719V5.004a1.997 1.997 0 0 0-2.445-1.95C16.73 3.489 15.361 4.523 14.628 6H9.265a8.37 8.37 0 0 0-6.419 2.969c-1.2-.175-1.055-1.971.153-1.969 1.307-.005 1.308-1.995 0-2-3.185-.01-4.129 4.406-1.268 5.709-1.759 3.62-.229 8.282 3.268 10.212V21c.002 3.351 4.74 4.118 5.829 1h2.343c1.089 3.12 5.827 2.349 5.829-1v-.092a8.021 8.021 0 0 0 3.432-3.954C23.253 16.779 24 16.106 24 15v-2c0-1.106-.748-1.779-1.568-1.954ZM18 13c-1.308-.006-1.308-1.994 0-2 1.308.006 1.308 1.994 0 2ZM6.052 4.512C5.49-1.079 13.792-1.62 14 4H9.266c-1.121 0-2.2.185-3.214.512Z"/></svg>
  