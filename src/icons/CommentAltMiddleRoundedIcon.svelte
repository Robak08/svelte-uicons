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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-comment-alt-middle {customClass}"><path d="M12.009 23.665a2.01 2.01 0 0 1-1.337-.507l-3.748-3.157H4.001c-2.206 0-4-1.794-4-4V4A4.003 4.003 0 0 1 4 0h16c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4h-2.852l-3.847 3.18a1.94 1.94 0 0 1-1.293.484ZM4 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.289c.236 0 .464.083.645.235l4.047 3.41 4.17-3.416c.18-.148.405-.229.638-.229h3.212c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H4Z"/></svg>
  