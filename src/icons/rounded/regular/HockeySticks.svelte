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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.974 17.963a5.524 5.524 0 0 0-4.015-4.726L22.875 3.7A2.866 2.866 0 0 0 20.133 0a2.983 2.983 0 0 0-2.87 2.125L14.8 10.162a3.972 3.972 0 0 1-2.8 2.703 4 4 0 0 1-2.8-2.7L6.766 2.128A2.983 2.983 0 0 0 3.9 0a2.866 2.866 0 0 0-2.748 3.7l2.9 9.539A5.459 5.459 0 0 0 1.43 22.2 5.509 5.509 0 0 0 5.5 24h3.769a10.121 10.121 0 0 0 2.743-.377h.011A9.969 9.969 0 0 0 14.73 24h3.77a5.5 5.5 0 0 0 5.474-6.037ZM3.2 2.351A.858.858 0 0 1 3.9 2a1 1 0 0 1 .957.709l2.439 8.034A5.989 5.989 0 0 0 8.562 13H6.067l-3-9.882a.859.859 0 0 1 .133-.767ZM5.5 22a3.5 3.5 0 0 1-3.483-3.847A3.634 3.634 0 0 1 5.693 15h5.275a5.965 5.965 0 0 0 5.74-4.254l2.467-8.034A.994.994 0 0 1 20.133 2a.867.867 0 0 1 .829 1.116l-4.038 13.208A7.954 7.954 0 0 1 9.269 22Zm15.591-1.147A3.508 3.508 0 0 1 18.5 22h-3.208a9.976 9.976 0 0 0 3.545-5.093l.537-1.757a3.524 3.524 0 0 1 2.609 3 3.47 3.47 0 0 1-.892 2.703Z"/></svg>
  