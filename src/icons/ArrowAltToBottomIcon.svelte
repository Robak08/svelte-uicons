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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-alt-to-bottom {customClass}"><path d="M12.552 21.768a.774.774 0 0 1-1.104 0L7.087 17.35c-.492-.498-.143-1.35.552-1.35H11V1a1 1 0 1 1 2 0v15h3.361c.695 0 1.044.852.552 1.35l-4.361 4.418ZM20 22H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Z"/></svg>
  