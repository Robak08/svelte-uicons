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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.011 11.414c-.871 4.416-3.815 5.948-7.569 5.948h-.57c-.481 0-.871.33-.931.781l-.06.24-.721 4.626-.03.21a.963.963 0 0 1-.932.781H7.233a.53.53 0 0 1-.48-.631l.3-2.042H2.367a.606.606 0 0 1-.54-.721L4.95.901A1.09 1.09 0 0 1 6.001 0h7.449c2.583 0 4.596.54 5.677 1.802 1.021 1.171 1.321 2.433 1.021 4.295-.24-.12-.511-.24-.811-.33-.39-.12-.781-.21-1.171-.27a12.49 12.49 0 0 0-1.922-.15h-5.827c-.481 0-.871.33-.931.781l-1.261 7.87-.04.248c.097-.504.526-.908 1.061-.908h2.193c4.296 0 7.66-1.742 8.621-6.789l.09-.45c.42.21.781.481 1.081.841.96 1.08 1.14 2.642.78 4.474z"/></svg>
  