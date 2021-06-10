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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-network-cloud {customClass}"><path d="M23 20h-8.184A3 3 0 0 0 13 18.184v-4.162c1.344 0 2.52-.012 3.095-.023a5.2 5.2 0 0 0 1.066-.131 4.951 4.951 0 0 0 3.7-3.7 5.013 5.013 0 0 0-3.559-6l-.172-.038c-.3-.067-.451-.1-.588-.429a6 6 0 0 0-11.367.857 6.366 6.366 0 0 0-.057 2.732 3.5 3.5 0 0 0 .449 6.588A3.692 3.692 0 0 0 6.4 14c.655.018 2.534.026 4.494.026H11v4.159A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2zM6.456 12a1.7 1.7 0 0 1-.38-.057 1.473 1.473 0 0 1-1.02-1.019 1.5 1.5 0 0 1 .851-1.8 2.015 2.015 0 0 0 1.18-2.3 4 4 0 0 1 3.306-4.779A4.19 4.19 0 0 1 10.982 2 4.013 4.013 0 0 1 14.7 4.469 2.644 2.644 0 0 0 16.784 6.1a3.023 3.023 0 0 1 2.132 3.622 2.974 2.974 0 0 1-2.2 2.192 3.126 3.126 0 0 1-.658.082c-.693.013-2.258.022-3.939.025A.964.964 0 0 0 12 12a.959.959 0 0 0-.121.024c-2.261.004-4.668-.004-5.423-.024zM12 22a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></svg>
