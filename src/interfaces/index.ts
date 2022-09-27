export type ProcessStatus = '' | 'failure' | 'inprogress' | 'success';
export type StatusLabelName =
  | 'stopped'
  | 'disabled'
  | 'running'
  | 'attached'
  | 'deployed'
  | 'enabled'
  | 'pending'
  | 'starting'
  | 'building'
  | 'starting-static'
  | 'failed'
  | 'verified'
  | 'published'
  | 'onteam'
  | 'scheduled'
  | 'ready'
  | 'loading'
  | 'inprogress'
  | 'updating'
  | 'provisioning'
  | 'generating'
  | 'info'
  | 'warning'
  | 'danger'
	| 'success'
	| 'Verification Pending'
	| 'Timed Out'
	| 'Update Needed';
