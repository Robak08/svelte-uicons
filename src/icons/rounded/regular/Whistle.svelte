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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 12a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM21.5 8H8.229a8.152 8.152 0 0 0-8.207 7.394A8 8 0 0 0 8.006 24a8.264 8.264 0 0 0 1.279-.1 7.956 7.956 0 0 0 5.908-4.46A7.9 7.9 0 0 0 16 16.152a1 1 0 0 1 .786-1.006l5.161-.938A2.5 2.5 0 0 0 24 11.748V10.5A2.5 2.5 0 0 0 21.5 8Zm.5 3.748a.5.5 0 0 1-.411.492l-5.162.939A2.981 2.981 0 0 0 14 16.112a5.938 5.938 0 0 1-.607 2.46 5.986 5.986 0 0 1-11.375-3.03A6.144 6.144 0 0 1 8.229 10H21.5a.5.5 0 0 1 .5.5ZM9 4V1a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0Zm3.607.553 1.5-3a1 1 0 0 1 1.79.894l-1.5 3a1 1 0 1 1-1.789-.894Zm-8.5-2.1a1 1 0 1 1 1.786-.9l1.516 3a1 1 0 1 1-1.785.9Z"/></svg>
  