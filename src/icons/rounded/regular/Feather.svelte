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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.827 1.174A3.968 3.968 0 0 0 19.04.119a31.29 31.29 0 0 0-13.784 7.75A7.757 7.757 0 0 0 3.009 13.7 7.646 7.646 0 0 0 4.578 18L.293 22.293a1 1 0 1 0 1.414 1.414l4.284-4.284A7.446 7.446 0 0 0 10.589 21a8.394 8.394 0 0 0 5.9-2.545c4.4-4.4 6.883-11.446 7.394-13.525a3.931 3.931 0 0 0-1.056-3.756zM5.007 13.608a5.756 5.756 0 0 1 1.665-4.327C7.1 8.856 7.545 8.457 8 8.067v6.519l-1.99 1.99a5.671 5.671 0 0 1-1.003-2.968zm10.038 3.459a5.908 5.908 0 0 1-7.618.92l2.279-2.279L12.414 13h5.762a25.778 25.778 0 0 1-3.131 4.067zm6.9-12.62a29.628 29.628 0 0 1-2.6 6.553h-4.931l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5L10 12.586V6.512a30.354 30.354 0 0 1 9.522-4.451A2.017 2.017 0 0 1 20.006 2a1.99 1.99 0 0 1 1.409.589 1.925 1.925 0 0 1 .526 1.858z"/></svg>
  