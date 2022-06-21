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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-location-alt {customClass}"><path d="M12 16a3 3 0 0 0 1.342-.314l2-1A2.986 2.986 0 0 0 17 12V9.033a2.985 2.985 0 0 0-1.658-2.683l-2-1a3.014 3.014 0 0 0-2.683 0l-2 1A2.985 2.985 0 0 0 7 9.033V12a2.986 2.986 0 0 0 1.658 2.684l2 1A3 3 0 0 0 12 16zm-3-4V9.033a1 1 0 0 1 .051-.3l2.18 1.09a1.72 1.72 0 0 0 1.538 0l2.18-1.09a1 1 0 0 1 .051.3V12a.994.994 0 0 1-.553.895l-2 1a1.009 1.009 0 0 1-.895 0l-2-1A.994.994 0 0 1 9 12zm10 10h-2.709l3.487-3.222a11 11 0 1 0-15.528.028L7.709 22H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zM5.636 4.636a9 9 0 0 1 12.757 12.7l-3.985 3.681A3.513 3.513 0 0 1 9.571 21l-3.935-3.636a9.01 9.01 0 0 1 0-12.728z"/></svg>
