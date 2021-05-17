export function withParsedProps<ModuleProps>(
  Module: (props: ModuleProps) => JSX.Element,
  validate: (props: unknown) => props is ModuleProps
) {
  function Wrapped(props: unknown) {
    if (validate(props)) {
      return <Module {...props} />;
    }
    return <div>Invalid</div>;
  }

  return Wrapped;
}
