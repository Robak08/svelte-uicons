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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-confetti {customClass}"><circle cx="5" cy="13" r="1"/><circle cx="1" cy="9" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="1" cy="1" r="1"/><circle cx="23" cy="13" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="23" cy="5" r="1"/><circle cx="19" cy="1" r="1"/><circle cx="14" cy="23" r="1"/><circle cx="10" cy="19" r="1"/><circle cx="14" cy="15" r="1"/><circle cx="10" cy="11" r="1"/><path d="M15 3a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM7 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM23 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"/></svg>
