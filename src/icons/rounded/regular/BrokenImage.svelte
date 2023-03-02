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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m19.95 5.54-3.49-3.49A6.96 6.96 0 0 0 11.51 0H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-8.51c0-1.87-.73-3.63-2.05-4.95Zm-1.41 1.41c.32.32.59.67.81 1.05h-4.34c-.55 0-1-.45-1-1V2.66c.38.22.73.49 1.05.81l3.49 3.49ZM7 2h4.51c.16 0 .33 0 .49.02V7c0 1.65 1.35 3 3 3h4.98c.02.16.02.32.02.49v4.58l-2.41-2.41c-.87-.87-2.28-.87-3.15 0l-2.27 2.27c-.09.09-.23.09-.32 0l-2.27-2.27c-.87-.87-2.28-.87-3.15 0L3.99 15.1V5c0-1.65 1.35-3 3-3Zm10 20H7c-1.65 0-3-1.35-3-3v-1.07l3.86-3.86c.09-.09.23-.09.32 0l2.27 2.27c.87.87 2.28.87 3.15 0l2.27-2.27c.09-.09.23-.09.32 0l3.83 3.83V19c0 1.65-1.35 3-3 3Z"/></svg>
  