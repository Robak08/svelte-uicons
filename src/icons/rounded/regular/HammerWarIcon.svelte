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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.961 13.848c-.176-1.254-.912-2.326-1.952-2.901l-2.962-1.963-.451-2.01a1.993 1.993 0 0 0-1.569-1.568l-2.012-.452-1.922-2.895a3.96 3.96 0 0 0-2.94-2.02A3.964 3.964 0 0 0 6.77 1.172L5.172 2.77c-.896.896-1.309 2.129-1.133 3.383s.912 2.326 1.948 2.898l3.758 2.518.637.637-6.088 6.088a3.004 3.004 0 0 0-4.293 2.707c0 1.654 1.346 3 3 3a3.004 3.004 0 0 0 2.707-4.293l6.088-6.088.637.637 2.474 3.686a3.968 3.968 0 0 0 2.941 2.019 3.962 3.962 0 0 0 3.383-1.133l1.598-1.598a3.966 3.966 0 0 0 1.133-3.383ZM3 22a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm7.255-12.497L7.03 7.346a1.985 1.985 0 0 1-1.01-1.471 1.988 1.988 0 0 1 .566-1.691l1.598-1.598a1.98 1.98 0 0 1 1.692-.566c.627.088 1.163.456 1.511 1.076l2.103 3.173-3.235 3.235Zm1.54 1.288 3.662-3.661 1.179.235.235 1.178-3.662 3.662-1.414-1.414Zm9.619 5.025-1.598 1.598a1.993 1.993 0 0 1-1.692.566c-.627-.088-1.163-.456-1.514-1.08l-2.114-3.155 3.234-3.234 3.239 2.144c.554.308.922.844 1.01 1.471a1.988 1.988 0 0 1-.566 1.691Z"/></svg>
  