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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-school-bus {customClass}"><path d="M20 11h-1V5a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v11a2.994 2.994 0 0 0 2.071 2.838A3.4 3.4 0 0 0 2 19.5a3.5 3.5 0 0 0 7 0 3.465 3.465 0 0 0-.041-.5h6.082a3.465 3.465 0 0 0-.041.5 3.5 3.5 0 0 0 7 0 3.4 3.4 0 0 0-.071-.662A2.994 2.994 0 0 0 24 16v-1a4 4 0 0 0-4-4zM2 11V7h2v4zm4-4h2v4H6zm4 0h3v10h-3zm5 0h2v4h-2zM4 3h11a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2zM2 13h6v4H3a1 1 0 0 1-1-1zm5 6.5a1.5 1.5 0 0 1-3 0 1.41 1.41 0 0 1 .093-.5h2.814a1.41 1.41 0 0 1 .093.5zM18.5 21a1.5 1.5 0 0 1-1.5-1.5 1.41 1.41 0 0 1 .093-.5h2.814a1.41 1.41 0 0 1 .093.5 1.5 1.5 0 0 1-1.5 1.5zm3.5-5a1 1 0 0 1-1 1h-6v-4h5a2 2 0 0 1 2 2z"/></svg>
