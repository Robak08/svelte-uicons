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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.5 5A2.5 2.5 0 1 0 12 2.5 2.5 2.5 0 0 0 14.5 5ZM23 19a1 1 0 0 0-1 1 2 2 0 0 1-1.739 1.982l2.714-12.757a1 1 0 0 0-1.95-.45L20.512 11H19.13a1.006 1.006 0 0 1-.856-.484l-1.261-2.1A5.026 5.026 0 0 0 12.729 6H6.5a3.011 3.011 0 0 0-2.417 1.22l-.875 1.187a1 1 0 1 0 1.61 1.186l.874-1.187A1.006 1.006 0 0 1 6.5 8h2.961L7.7 12.273a3 3 0 0 0 1.175 3.676l3.658 2.308A1 1 0 0 1 13 19.1V22H7.238l1.2-3.48a1 1 0 1 0-1.85-.758L5.076 22H2.255l1.786-8.776a1 1 0 0 0-1.95-.448l-2.066 10A1 1 0 0 0 1 24h19a4 4 0 0 0 4-4 1 1 0 0 0-1-1Zm-9.4-2.434-1.175-.742 2.719-6.6a289.94 289.94 0 0 1 1.415 2.325A3.016 3.016 0 0 0 19.13 13h.92l-1.85 9H15v-2.9a2.984 2.984 0 0 0-1.4-2.534Z"/></svg>
  