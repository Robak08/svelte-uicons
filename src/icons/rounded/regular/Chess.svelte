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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 21a3 3 0 0 1-3 3h-5a1 1 0 0 1 0-2h5a1 1 0 0 0 1-1 .96.96 0 0 0-1.021-1H17a1 1 0 0 1 0-2h3v-7h-4v6a1 1 0 0 1-2 0v-6.269A2 2 0 0 1 13 9V8a1 1 0 0 1 2 0v1h2V8a1 1 0 0 1 2 0v1h2V8a1 1 0 0 1 2 0v1a2 2 0 0 1-1 1.731v7.444A2.936 2.936 0 0 1 24 21Zm-10 0a3 3 0 0 1-3 3H3a3 3 0 0 1-.766-5.9A41.973 41.973 0 0 0 3.974 9a1 1 0 0 1-.7-1.691S2.27 5.748 2.25 5.707A2.6 2.6 0 0 1 4.6 2h1.41V1a1 1 0 0 1 2 0v1H9.4a2.6 2.6 0 0 1 2.352 3.707c-.019.041-1.029 1.6-1.029 1.6A1 1 0 0 1 10.027 9a42.376 42.376 0 0 0 1.74 9.1A3 3 0 0 1 14 21ZM5.976 9a41.982 41.982 0 0 1-1.625 9h5.3a42.235 42.235 0 0 1-1.626-9ZM4.04 4.807l1.4 2.16.021.033h3.08l.02-.033 1.4-2.16A.6.6 0 0 0 9.4 4H4.6a.588.588 0 0 0-.506.278.594.594 0 0 0-.054.529ZM12 21a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1Z"/></svg>
  