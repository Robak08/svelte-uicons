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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.643 8.35a1.19 1.19 0 0 1 .327 1.117l-2.648 7.043a.738.738 0 0 1-.692.49.747.747 0 0 1-.675-.378l-.908-2.976a1 1 0 0 0-.713-.679l-2.818-.7a.762.762 0 0 1-.027-1.433l7.06-2.8a1.156 1.156 0 0 1 1.094.316ZM24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12Zm-6.947-5.068a3.163 3.163 0 0 0-3.066-.824c-.039.011-7.228 2.864-7.228 2.864a2.76 2.76 0 0 0 .2 5.212l2.346.587.773 2.524A2.739 2.739 0 0 0 12.617 19h.044a2.738 2.738 0 0 0 2.532-1.786s2.693-7.165 2.7-7.2a3.18 3.18 0 0 0-.84-3.082Z"/></svg>
  