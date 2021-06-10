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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-skateboard {customClass}"><path d="M21.835 2.165a7.389 7.389 0 0 0-10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zM20.421 11.2 11.2 20.421A5.39 5.39 0 1 1 3.579 12.8L12.8 3.579a5.39 5.39 0 1 1 7.621 7.621zm-.714-2.909a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l.793-.793L13.5 7.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793L17.5 9.086l.793-.793a1 1 0 0 1 1.414 0zm-7 7a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l.793-.793L6.5 14.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 0z"/></svg>
