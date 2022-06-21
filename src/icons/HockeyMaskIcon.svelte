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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-hockey-mask {customClass}"><path d="M12 0C5.935 0 1 4.686 1 10.444 1 15.9 5.619 24 12 24s11-8.1 11-13.556C23 4.686 18.065 0 12 0Zm0 22c-4.968 0-9-6.992-9-11.556A8.746 8.746 0 0 1 12 2a8.746 8.746 0 0 1 9 8.444C21 15.008 16.968 22 12 22Zm7-11a2.292 2.292 0 0 1-2.5 2 2.292 2.292 0 0 1-2.5-2 2.292 2.292 0 0 1 2.5-2 2.292 2.292 0 0 1 2.5 2ZM7.5 13A2.292 2.292 0 0 1 5 11a2.292 2.292 0 0 1 2.5-2 2.292 2.292 0 0 1 2.5 2 2.292 2.292 0 0 1-2.5 2Zm3.5 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1ZM9 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm4 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm0-3a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm-2 14a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"/></svg>
