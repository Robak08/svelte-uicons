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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 14.5c-.035 1.971-2.965 1.971-3 0 .035-1.971 2.965-1.971 3 0ZM6.944 14h2.112L8 10.48 6.944 14ZM24 7v10c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-12.042 9.713-3-10c-.247-.933-1.669-.932-1.916 0l-3 10c-.37 1.254 1.535 1.826 1.916.574L6.344 16h3.312l.386 1.287a1 1 0 1 0 1.916-.574ZM20 7c-.006-1.308-1.994-1.307-2 0v4.351c-2.224-1.147-5.061.638-5 3.149-.07 2.598 2.968 4.384 5.186 3.048.49.822 1.848.414 1.814-.548V7Z"/></svg>
  