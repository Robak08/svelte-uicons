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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-graduation-cap {customClass}"><path d="M23.875 7.543a3.881 3.881 0 0 0-1.818-2.313l-7.374-3.513A5.226 5.226 0 0 0 9.4 1.672L1.943 5.23a1.355 1.355 0 0 0-.084.045 3.691 3.691 0 0 0 .084 6.455L4 12.71v4.9a5.007 5.007 0 0 0 3.519 4.778A15.557 15.557 0 0 0 12 23a15.557 15.557 0 0 0 4.481-.607A5.007 5.007 0 0 0 20 17.615v-4.907l2-.956V20a1 1 0 0 0 2 0V8a.97.97 0 0 0-.125-.457zM18 17.615a3 3 0 0 1-2.1 2.863A13.593 13.593 0 0 1 12 21a13.593 13.593 0 0 1-3.9-.522A3 3 0 0 1 6 17.615v-3.952l3.317 1.58a5.272 5.272 0 0 0 2.705.739 5 5 0 0 0 2.577-.694L18 13.663zm3.2-7.69-7.542 3.6a3.294 3.294 0 0 1-3.39-.045L2.889 9.97a1.692 1.692 0 0 1-.037-2.958l7.495-3.58a3.3 3.3 0 0 1 3.39.045l7.374 3.513A1.728 1.728 0 0 1 22 8.48a1.7 1.7 0 0 1-.8 1.445z"/></svg>
