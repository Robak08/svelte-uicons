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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-level-down {customClass}"><path d="M17.713 18.233a1 1 0 0 0-1.414-.011l-2.885 2.834c-.108.108-.255.244-.414.389V5a5.006 5.006 0 0 0-5-5H1a1 1 0 0 0 0 2h7a3 3 0 0 1 3 3v16.445a14.91 14.91 0 0 1-.42-.395L7.7 18.222a1 1 0 1 0-1.4 1.425l2.872 2.823c.2.2.513.487.84.777a3 3 0 0 0 3.977 0c.326-.289.636-.572.833-.769l2.878-2.831a1 1 0 0 0 .013-1.414Z"/></svg>
