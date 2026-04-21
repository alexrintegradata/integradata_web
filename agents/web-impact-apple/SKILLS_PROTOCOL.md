# Skills Integration Protocol

## Goal
Allow progressive addition of new skills without losing:
- premium visual consistency,
- motion quality,
- accessibility and performance baselines.

## Integration Pipeline
1. Intake:
   - Register skill in `skills/skills.manifest.json`.
   - Assign a unique `id`, `version`, and `owner`.
2. Compatibility Check:
   - Confirm design compatibility with `AGENT_SPEC.md`.
   - Confirm no token naming collision.
3. Scope Declaration:
   - Define what the skill can modify:
     - layout,
     - components,
     - animation,
     - copy,
     - data.
4. Conflict Policy:
   - If skill conflicts with core standards, core standards win.
   - If two skills conflict, higher `priority` wins.
5. Validation:
   - Accessibility checks.
   - Responsive checks.
   - Basic performance sanity checks.
6. Activation:
   - Mark skill as `enabled: true`.
   - Add usage notes and sample invocation.

## Required Skill Metadata
- `id`: unique kebab-case id
- `name`: display name
- `version`: semver string
- `description`: one-line purpose
- `owner`: person/team
- `priority`: integer (higher wins)
- `enabled`: boolean
- `scope`: list of allowed areas
- `constraints`: list of rules the skill must respect
- `entrypoint`: brief instruction to invoke the skill

## Guardrails
- Do not override reduced-motion support.
- Do not inject heavy dependencies without explicit approval.
- Do not break semantic structure for visual-only effects.
- Do not introduce inconsistent spacing or typography scales.

## Merge Strategy for New Skills
1. Keep the style system stable (tokens first).
2. Integrate behavior in isolated modules/components.
3. Validate on mobile before desktop polish.
4. Record decisions in the manifest notes.
