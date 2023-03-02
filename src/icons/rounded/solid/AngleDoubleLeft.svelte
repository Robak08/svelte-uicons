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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24a1.493 1.493 0 0 1-1.06-.439l-7.676-7.672a5.5 5.5 0 0 1 0-7.778L10.936.439a1.5 1.5 0 1 1 2.121 2.122l-7.672 7.671a2.5 2.5 0 0 0 0 3.536l7.672 7.671A1.5 1.5 0 0 1 12 24Z"/><path d="M21.542 24a1.5 1.5 0 0 1-1.061-.439L11.4 14.475a3.505 3.505 0 0 1 0-4.95L20.481.439A1.5 1.5 0 0 1 22.6 2.561l-9.086 9.085a.5.5 0 0 0 0 .708l9.086 9.085A1.5 1.5 0 0 1 21.542 24Z"/></svg>
  