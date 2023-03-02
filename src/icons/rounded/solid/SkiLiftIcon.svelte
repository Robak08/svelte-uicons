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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.733 12.654a3.971 3.971 0 0 1-2.108 2.22l-19.2 9.031a1 1 0 0 1-.852-1.81l12.514-5.886-1.274-2.669-2.62 1.191a3 3 0 0 1-3.9-1.35L4.918 10a2.965 2.965 0 0 1 5.307-2.645l.7 1.672a1 1 0 0 1-.508 1.293l-1.749.835a1.031 1.031 0 0 0-.568 1.391.992.992 0 0 0 1.262.364l2.619-1.191a2.009 2.009 0 0 1 2.633.96l1.28 2.679 4.895-2.3a2 2 0 0 0 1.034-2.649 1 1 0 1 1 1.826-.814 3.973 3.973 0 0 1 .084 3.059ZM2.738 15.142a7 7 0 0 0 3.709 3.317 1 1 0 1 0 .719-1.866 4.991 4.991 0 0 1-2.634-2.333L1.924 8a1 1 0 0 0-1.848.767ZM14 10a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1ZM5.5 5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>
  