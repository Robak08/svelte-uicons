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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.4 13a3.162 3.162 0 0 0-1.98.565C18.051 9.492 16.137 4.98 12.809.411a1.038 1.038 0 0 0-1.618 0C7.86 4.984 5.946 9.5 5.577 13.575 3.276 12-.06 13.741 0 17.5c.273 8.59 12.728 8.589 13 0 .011-3.638-3.013-5.412-5.406-4.049A24.51 24.51 0 0 1 12 2.739a24.5 24.5 0 0 1 4.408 10.723 3.476 3.476 0 0 0-2.786-.281c1.988 2.374 1.7 6.886-.266 9.322 4.031 3.516 10.762.4 10.644-5C24 14.684 22.171 13 20.4 13Z"/></svg>
  