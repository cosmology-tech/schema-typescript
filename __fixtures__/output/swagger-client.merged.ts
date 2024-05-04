export interface GetServiceAccountIssuerOpenIDConfigurationRequest {}
export interface GetCoreAPIVersionsRequest {}
export interface GetCoreV1APIResourcesRequest {}
export interface ListCoreV1ComponentStatusRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ReadCoreV1ComponentStatusRequest {
  pretty?: string;
  name: string;
}
export interface ListCoreV1ConfigMapForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1EndpointsForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1EventForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1LimitRangeForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1NamespaceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: Namespace;
}
export interface CreateCoreV1NamespacedBindingRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  namespace: string;
  body: Binding;
}
export interface ListCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ConfigMap;
}
export interface DeleteCoreV1CollectionNamespacedConfigMapRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ConfigMap;
}
export interface DeleteCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedConfigMapRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Endpoints;
}
export interface DeleteCoreV1CollectionNamespacedEndpointsRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Endpoints;
}
export interface DeleteCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedEndpointsRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedEventRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Event;
}
export interface DeleteCoreV1CollectionNamespacedEventRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedEventRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Event;
}
export interface DeleteCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: LimitRange;
}
export interface DeleteCoreV1CollectionNamespacedLimitRangeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: LimitRange;
}
export interface DeleteCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedLimitRangeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PersistentVolumeClaim;
}
export interface DeleteCoreV1CollectionNamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PersistentVolumeClaim;
}
export interface DeleteCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedPersistentVolumeClaimRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PersistentVolumeClaim;
}
export interface PatchCoreV1NamespacedPersistentVolumeClaimStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedPodRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Pod;
}
export interface DeleteCoreV1CollectionNamespacedPodRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedPodRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Pod;
}
export interface DeleteCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedPodRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ConnectCoreV1GetNamespacedPodAttachRequest {
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodAttachRequest {
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface CreateCoreV1NamespacedPodBindingRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  namespace: string;
  body: Binding;
}
export interface CreateCoreV1NamespacedPodEvictionRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  namespace: string;
  body: Eviction;
}
export interface ConnectCoreV1GetNamespacedPodExecRequest {
  command?: string;
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodExecRequest {
  command?: string;
  container?: string;
  stderr?: boolean;
  stdin?: boolean;
  stdout?: boolean;
  tty?: boolean;
  name: string;
  namespace: string;
}
export interface ReadCoreV1NamespacedPodLogRequest {
  container?: string;
  follow?: boolean;
  insecureSkipTLSVerifyBackend?: boolean;
  limitBytes?: number;
  pretty?: string;
  previous?: boolean;
  sinceSeconds?: number;
  tailLines?: number;
  timestamps?: boolean;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedPodPortforwardRequest {
  ports?: number;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodPortforwardRequest {
  ports?: number;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PutNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1DeleteNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1OptionsNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1HeadNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PatchNamespacedPodProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PostNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PutNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1DeleteNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1OptionsNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1HeadNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PatchNamespacedPodProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ReadCoreV1NamespacedPodStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPodStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Pod;
}
export interface PatchCoreV1NamespacedPodStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PodTemplate;
}
export interface DeleteCoreV1CollectionNamespacedPodTemplateRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodTemplate;
}
export interface DeleteCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedPodTemplateRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ReplicationController;
}
export interface DeleteCoreV1CollectionNamespacedReplicationControllerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicationController;
}
export interface DeleteCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedReplicationControllerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedReplicationControllerScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedReplicationControllerScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchCoreV1NamespacedReplicationControllerScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedReplicationControllerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedReplicationControllerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicationController;
}
export interface PatchCoreV1NamespacedReplicationControllerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ResourceQuota;
}
export interface DeleteCoreV1CollectionNamespacedResourceQuotaRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ResourceQuota;
}
export interface DeleteCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedResourceQuotaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespacedResourceQuotaStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedResourceQuotaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ResourceQuota;
}
export interface PatchCoreV1NamespacedResourceQuotaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedSecretRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Secret;
}
export interface DeleteCoreV1CollectionNamespacedSecretRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedSecretRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Secret;
}
export interface DeleteCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedSecretRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ServiceAccount;
}
export interface DeleteCoreV1CollectionNamespacedServiceAccountRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ServiceAccount;
}
export interface DeleteCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedServiceAccountRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface CreateCoreV1NamespacedServiceAccountTokenRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  namespace: string;
  body: TokenRequest;
}
export interface ListCoreV1NamespacedServiceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Service;
}
export interface ReadCoreV1NamespacedServiceRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Service;
}
export interface DeleteCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoreV1NamespacedServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ConnectCoreV1GetNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PostNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PutNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1DeleteNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1OptionsNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1HeadNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1PatchNamespacedServiceProxyRequest {
  path?: string;
  name: string;
  namespace: string;
}
export interface ConnectCoreV1GetNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PostNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PutNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1DeleteNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1OptionsNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1HeadNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ConnectCoreV1PatchNamespacedServiceProxyWithPathRequest {
  path?: string;
  name: string;
  namespace: string;
  path: string;
}
export interface ReadCoreV1NamespacedServiceStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoreV1NamespacedServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Service;
}
export interface PatchCoreV1NamespacedServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadCoreV1NamespaceRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Namespace;
}
export interface DeleteCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCoreV1NamespaceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReplaceCoreV1NamespaceFinalizeRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  name: string;
  body: Namespace;
}
export interface ReadCoreV1NamespaceStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NamespaceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Namespace;
}
export interface PatchCoreV1NamespaceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListCoreV1NodeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: Node;
}
export interface DeleteCoreV1CollectionNodeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadCoreV1NodeRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Node;
}
export interface DeleteCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCoreV1NodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ConnectCoreV1GetNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1PostNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1PutNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1DeleteNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1OptionsNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1HeadNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1PatchNodeProxyRequest {
  path?: string;
  name: string;
}
export interface ConnectCoreV1GetNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1PostNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1PutNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1DeleteNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1OptionsNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1HeadNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ConnectCoreV1PatchNodeProxyWithPathRequest {
  path?: string;
  name: string;
  path: string;
}
export interface ReadCoreV1NodeStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1NodeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: Node;
}
export interface PatchCoreV1NodeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListCoreV1PersistentVolumeClaimForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1PersistentVolumeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PersistentVolume;
}
export interface DeleteCoreV1CollectionPersistentVolumeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadCoreV1PersistentVolumeRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PersistentVolume;
}
export interface DeleteCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCoreV1PersistentVolumeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadCoreV1PersistentVolumeStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCoreV1PersistentVolumeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PersistentVolume;
}
export interface PatchCoreV1PersistentVolumeStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListCoreV1PodForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1PodTemplateForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ReplicationControllerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ResourceQuotaForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1SecretForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ServiceAccountForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoreV1ServiceForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ConfigMapListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1EndpointsListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1EventListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1LimitRangeListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1NamespaceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1NamespacedConfigMapListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedConfigMapRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedEndpointsListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedEndpointsRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedEventListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedEventRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedLimitRangeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedLimitRangeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedPersistentVolumeClaimListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedPersistentVolumeClaimRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodTemplateListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedPodTemplateRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedReplicationControllerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedReplicationControllerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedResourceQuotaListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedResourceQuotaRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedSecretListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedSecretRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceAccountListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceAccountRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoreV1NamespacedServiceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchCoreV1NamespaceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchCoreV1NodeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1NodeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchCoreV1PersistentVolumeClaimListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1PersistentVolumeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1PersistentVolumeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchCoreV1PodListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1PodTemplateListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ReplicationControllerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ResourceQuotaListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1SecretListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ServiceAccountListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoreV1ServiceListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetAPIVersionsRequest {}
export interface GetAdmissionregistrationAPIGroupRequest {}
export interface GetAdmissionregistrationV1APIResourcesRequest {}
export interface ListAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: MutatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1CollectionMutatingWebhookConfigurationRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: MutatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: ValidatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1CollectionValidatingWebhookConfigurationRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: ValidatingWebhookConfiguration;
}
export interface DeleteAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchAdmissionregistrationV1MutatingWebhookConfigurationListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAdmissionregistrationV1MutatingWebhookConfigurationRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchAdmissionregistrationV1ValidatingWebhookConfigurationListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAdmissionregistrationV1ValidatingWebhookConfigurationRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetApiextensionsAPIGroupRequest {}
export interface GetApiextensionsV1APIResourcesRequest {}
export interface ListApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CustomResourceDefinition;
}
export interface DeleteApiextensionsV1CollectionCustomResourceDefinitionRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CustomResourceDefinition;
}
export interface DeleteApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchApiextensionsV1CustomResourceDefinitionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadApiextensionsV1CustomResourceDefinitionStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiextensionsV1CustomResourceDefinitionStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CustomResourceDefinition;
}
export interface PatchApiextensionsV1CustomResourceDefinitionStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchApiextensionsV1CustomResourceDefinitionListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchApiextensionsV1CustomResourceDefinitionRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetApiregistrationAPIGroupRequest {}
export interface GetApiregistrationV1APIResourcesRequest {}
export interface ListApiregistrationV1APIServiceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: APIService;
}
export interface DeleteApiregistrationV1CollectionAPIServiceRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadApiregistrationV1APIServiceRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: APIService;
}
export interface DeleteApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchApiregistrationV1APIServiceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadApiregistrationV1APIServiceStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceApiregistrationV1APIServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: APIService;
}
export interface PatchApiregistrationV1APIServiceStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchApiregistrationV1APIServiceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchApiregistrationV1APIServiceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetAppsAPIGroupRequest {}
export interface GetAppsV1APIResourcesRequest {}
export interface ListAppsV1ControllerRevisionForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1DaemonSetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1DeploymentForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ControllerRevision;
}
export interface DeleteAppsV1CollectionNamespacedControllerRevisionRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ControllerRevision;
}
export interface DeleteAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedControllerRevisionRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: DaemonSet;
}
export interface DeleteAppsV1CollectionNamespacedDaemonSetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: DaemonSet;
}
export interface DeleteAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedDaemonSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedDaemonSetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDaemonSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: DaemonSet;
}
export interface PatchAppsV1NamespacedDaemonSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Deployment;
}
export interface DeleteAppsV1CollectionNamespacedDeploymentRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Deployment;
}
export interface DeleteAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedDeploymentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedDeploymentScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDeploymentScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchAppsV1NamespacedDeploymentScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedDeploymentStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedDeploymentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Deployment;
}
export interface PatchAppsV1NamespacedDeploymentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: ReplicaSet;
}
export interface DeleteAppsV1CollectionNamespacedReplicaSetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicaSet;
}
export interface DeleteAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedReplicaSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedReplicaSetScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedReplicaSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchAppsV1NamespacedReplicaSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedReplicaSetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedReplicaSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: ReplicaSet;
}
export interface PatchAppsV1NamespacedReplicaSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: StatefulSet;
}
export interface DeleteAppsV1CollectionNamespacedStatefulSetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: StatefulSet;
}
export interface DeleteAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAppsV1NamespacedStatefulSetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedStatefulSetScaleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedStatefulSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Scale;
}
export interface PatchAppsV1NamespacedStatefulSetScaleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAppsV1NamespacedStatefulSetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAppsV1NamespacedStatefulSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: StatefulSet;
}
export interface PatchAppsV1NamespacedStatefulSetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListAppsV1ReplicaSetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAppsV1StatefulSetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1ControllerRevisionListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1DaemonSetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1DeploymentListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1NamespacedControllerRevisionListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedControllerRevisionRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedDaemonSetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedDaemonSetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedDeploymentListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedDeploymentRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedReplicaSetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedReplicaSetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1NamespacedStatefulSetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAppsV1NamespacedStatefulSetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchAppsV1ReplicaSetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAppsV1StatefulSetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetAuthenticationAPIGroupRequest {}
export interface GetAuthenticationV1APIResourcesRequest {}
export interface CreateAuthenticationV1TokenReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: TokenReview;
}
export interface GetAuthorizationAPIGroupRequest {}
export interface GetAuthorizationV1APIResourcesRequest {}
export interface CreateAuthorizationV1NamespacedLocalSubjectAccessReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  namespace: string;
  body: LocalSubjectAccessReview;
}
export interface CreateAuthorizationV1SelfSubjectAccessReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: SelfSubjectAccessReview;
}
export interface CreateAuthorizationV1SelfSubjectRulesReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: SelfSubjectRulesReview;
}
export interface CreateAuthorizationV1SubjectAccessReviewRequest {
  dryRun?: string;
  fieldManager?: string;
  pretty?: string;
  body: SubjectAccessReview;
}
export interface GetAutoscalingAPIGroupRequest {}
export interface GetAutoscalingV1APIResourcesRequest {}
export interface ListAutoscalingV1HorizontalPodAutoscalerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchAutoscalingV1HorizontalPodAutoscalerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAutoscalingV1NamespacedHorizontalPodAutoscalerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAutoscalingV1NamespacedHorizontalPodAutoscalerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetAutoscalingV2beta1APIResourcesRequest {}
export interface ListAutoscalingV2beta1HorizontalPodAutoscalerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta1CollectionNamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchAutoscalingV2beta1HorizontalPodAutoscalerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetAutoscalingV2beta2APIResourcesRequest {}
export interface ListAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface DeleteAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: HorizontalPodAutoscaler;
}
export interface PatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetBatchAPIGroupRequest {}
export interface GetBatchV1APIResourcesRequest {}
export interface ListBatchV1CronJobForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListBatchV1JobForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListBatchV1NamespacedCronJobRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1CollectionNamespacedCronJobRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadBatchV1NamespacedCronJobRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchBatchV1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadBatchV1NamespacedCronJobStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface PatchBatchV1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListBatchV1NamespacedJobRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Job;
}
export interface DeleteBatchV1CollectionNamespacedJobRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadBatchV1NamespacedJobRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Job;
}
export interface DeleteBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchBatchV1NamespacedJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadBatchV1NamespacedJobStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1NamespacedJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Job;
}
export interface PatchBatchV1NamespacedJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchBatchV1CronJobListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchBatchV1JobListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchBatchV1NamespacedCronJobListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchBatchV1NamespacedCronJobRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchBatchV1NamespacedJobListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchBatchV1NamespacedJobRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetBatchV1beta1APIResourcesRequest {}
export interface ListBatchV1beta1CronJobForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1beta1CollectionNamespacedCronJobRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface DeleteBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchBatchV1beta1NamespacedCronJobRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadBatchV1beta1NamespacedCronJobStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceBatchV1beta1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CronJob;
}
export interface PatchBatchV1beta1NamespacedCronJobStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchBatchV1beta1CronJobListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchBatchV1beta1NamespacedCronJobListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchBatchV1beta1NamespacedCronJobRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetCertificatesAPIGroupRequest {}
export interface GetCertificatesV1APIResourcesRequest {}
export interface ListCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CertificateSigningRequest;
}
export interface DeleteCertificatesV1CollectionCertificateSigningRequestRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CertificateSigningRequest;
}
export interface DeleteCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchCertificatesV1CertificateSigningRequestRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadCertificatesV1CertificateSigningRequestApprovalRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCertificatesV1CertificateSigningRequestApprovalRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CertificateSigningRequest;
}
export interface PatchCertificatesV1CertificateSigningRequestApprovalRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadCertificatesV1CertificateSigningRequestStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceCertificatesV1CertificateSigningRequestStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CertificateSigningRequest;
}
export interface PatchCertificatesV1CertificateSigningRequestStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchCertificatesV1CertificateSigningRequestListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCertificatesV1CertificateSigningRequestRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetCoordinationAPIGroupRequest {}
export interface GetCoordinationV1APIResourcesRequest {}
export interface ListCoordinationV1LeaseForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Lease;
}
export interface DeleteCoordinationV1CollectionNamespacedLeaseRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Lease;
}
export interface DeleteCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchCoordinationV1NamespacedLeaseRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchCoordinationV1LeaseListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchCoordinationV1NamespacedLeaseListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchCoordinationV1NamespacedLeaseRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetDiscoveryAPIGroupRequest {}
export interface GetDiscoveryV1APIResourcesRequest {}
export interface ListDiscoveryV1EndpointSliceForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1CollectionNamespacedEndpointSliceRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchDiscoveryV1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchDiscoveryV1EndpointSliceListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchDiscoveryV1NamespacedEndpointSliceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchDiscoveryV1NamespacedEndpointSliceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetDiscoveryV1beta1APIResourcesRequest {}
export interface ListDiscoveryV1beta1EndpointSliceForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1beta1CollectionNamespacedEndpointSliceRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: EndpointSlice;
}
export interface DeleteDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchDiscoveryV1beta1NamespacedEndpointSliceRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchDiscoveryV1beta1EndpointSliceListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchDiscoveryV1beta1NamespacedEndpointSliceListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchDiscoveryV1beta1NamespacedEndpointSliceRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetEventsAPIGroupRequest {}
export interface GetEventsV1APIResourcesRequest {}
export interface ListEventsV1EventForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListEventsV1NamespacedEventRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1CollectionNamespacedEventRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadEventsV1NamespacedEventRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchEventsV1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchEventsV1EventListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchEventsV1NamespacedEventListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchEventsV1NamespacedEventRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetEventsV1beta1APIResourcesRequest {}
export interface ListEventsV1beta1EventForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1beta1CollectionNamespacedEventRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Event;
}
export interface DeleteEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchEventsV1beta1NamespacedEventRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchEventsV1beta1EventListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchEventsV1beta1NamespacedEventListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchEventsV1beta1NamespacedEventRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface GetFlowcontrolApiserverAPIGroupRequest {}
export interface GetFlowcontrolApiserverV1beta1APIResourcesRequest {}
export interface ListFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: FlowSchema;
}
export interface DeleteFlowcontrolApiserverV1beta1CollectionFlowSchemaRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: FlowSchema;
}
export interface DeleteFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchFlowcontrolApiserverV1beta1FlowSchemaRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadFlowcontrolApiserverV1beta1FlowSchemaStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1FlowSchemaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: FlowSchema;
}
export interface PatchFlowcontrolApiserverV1beta1FlowSchemaStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PriorityLevelConfiguration;
}
export interface DeleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfigurationRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PriorityLevelConfiguration;
}
export interface DeleteFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PriorityLevelConfiguration;
}
export interface PatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchFlowcontrolApiserverV1beta1FlowSchemaListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchFlowcontrolApiserverV1beta1FlowSchemaRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchFlowcontrolApiserverV1beta1PriorityLevelConfigurationRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetNetworkingAPIGroupRequest {}
export interface GetNetworkingV1APIResourcesRequest {}
export interface ListNetworkingV1IngressClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: IngressClass;
}
export interface DeleteNetworkingV1CollectionIngressClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadNetworkingV1IngressClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: IngressClass;
}
export interface DeleteNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchNetworkingV1IngressClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListNetworkingV1IngressForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Ingress;
}
export interface DeleteNetworkingV1CollectionNamespacedIngressRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Ingress;
}
export interface DeleteNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchNetworkingV1NamespacedIngressRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadNetworkingV1NamespacedIngressStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceNetworkingV1NamespacedIngressStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Ingress;
}
export interface PatchNetworkingV1NamespacedIngressStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: NetworkPolicy;
}
export interface DeleteNetworkingV1CollectionNamespacedNetworkPolicyRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: NetworkPolicy;
}
export interface DeleteNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchNetworkingV1NamespacedNetworkPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListNetworkingV1NetworkPolicyForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNetworkingV1IngressClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNetworkingV1IngressClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchNetworkingV1IngressListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNetworkingV1NamespacedIngressListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchNetworkingV1NamespacedIngressRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchNetworkingV1NamespacedNetworkPolicyListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchNetworkingV1NamespacedNetworkPolicyRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchNetworkingV1NetworkPolicyListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetNodeAPIGroupRequest {}
export interface GetNodeV1APIResourcesRequest {}
export interface ListNodeV1RuntimeClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1CollectionRuntimeClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadNodeV1RuntimeClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchNodeV1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchNodeV1RuntimeClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNodeV1RuntimeClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetNodeV1beta1APIResourcesRequest {}
export interface ListNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1beta1CollectionRuntimeClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: RuntimeClass;
}
export interface DeleteNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchNodeV1beta1RuntimeClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchNodeV1beta1RuntimeClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchNodeV1beta1RuntimeClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetPolicyAPIGroupRequest {}
export interface GetPolicyV1APIResourcesRequest {}
export interface ListPolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreatePolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1CollectionNamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadPolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchPolicyV1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadPolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface PatchPolicyV1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListPolicyV1PodDisruptionBudgetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchPolicyV1NamespacedPodDisruptionBudgetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchPolicyV1NamespacedPodDisruptionBudgetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchPolicyV1PodDisruptionBudgetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetPolicyV1beta1APIResourcesRequest {}
export interface ListPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreatePolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1beta1CollectionNamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface DeletePolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ReadPolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplacePolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: PodDisruptionBudget;
}
export interface PatchPolicyV1beta1NamespacedPodDisruptionBudgetStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListPolicyV1beta1PodDisruptionBudgetForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListPolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreatePolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PodSecurityPolicy;
}
export interface DeletePolicyV1beta1CollectionPodSecurityPolicyRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadPolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  name: string;
}
export interface ReplacePolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PodSecurityPolicy;
}
export interface DeletePolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchPolicyV1beta1PodSecurityPolicyRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchPolicyV1beta1NamespacedPodDisruptionBudgetListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchPolicyV1beta1NamespacedPodDisruptionBudgetRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchPolicyV1beta1PodDisruptionBudgetListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchPolicyV1beta1PodSecurityPolicyListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchPolicyV1beta1PodSecurityPolicyRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetRbacAuthorizationAPIGroupRequest {}
export interface GetRbacAuthorizationV1APIResourcesRequest {}
export interface ListRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: ClusterRoleBinding;
}
export interface DeleteRbacAuthorizationV1CollectionClusterRoleBindingRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: ClusterRoleBinding;
}
export interface DeleteRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchRbacAuthorizationV1ClusterRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: ClusterRole;
}
export interface DeleteRbacAuthorizationV1CollectionClusterRoleRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: ClusterRole;
}
export interface DeleteRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchRbacAuthorizationV1ClusterRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: RoleBinding;
}
export interface DeleteRbacAuthorizationV1CollectionNamespacedRoleBindingRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: RoleBinding;
}
export interface DeleteRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchRbacAuthorizationV1NamespacedRoleBindingRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: Role;
}
export interface DeleteRbacAuthorizationV1CollectionNamespacedRoleRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: Role;
}
export interface DeleteRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchRbacAuthorizationV1NamespacedRoleRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface ListRbacAuthorizationV1RoleBindingForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListRbacAuthorizationV1RoleForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1ClusterRoleBindingListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1ClusterRoleBindingRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchRbacAuthorizationV1ClusterRoleListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1ClusterRoleRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleBindingListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleBindingRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchRbacAuthorizationV1NamespacedRoleRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface WatchRbacAuthorizationV1RoleBindingListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchRbacAuthorizationV1RoleListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface GetSchedulingAPIGroupRequest {}
export interface GetSchedulingV1APIResourcesRequest {}
export interface ListSchedulingV1PriorityClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: PriorityClass;
}
export interface DeleteSchedulingV1CollectionPriorityClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadSchedulingV1PriorityClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: PriorityClass;
}
export interface DeleteSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchSchedulingV1PriorityClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchSchedulingV1PriorityClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchSchedulingV1PriorityClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetStorageAPIGroupRequest {}
export interface GetStorageV1APIResourcesRequest {}
export interface ListStorageV1CSIDriverRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CSIDriver;
}
export interface DeleteStorageV1CollectionCSIDriverRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1CSIDriverRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CSIDriver;
}
export interface DeleteStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1CSIDriverRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListStorageV1CSINodeRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: CSINode;
}
export interface DeleteStorageV1CollectionCSINodeRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1CSINodeRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: CSINode;
}
export interface DeleteStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1CSINodeRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListStorageV1StorageClassRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: StorageClass;
}
export interface DeleteStorageV1CollectionStorageClassRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1StorageClassRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: StorageClass;
}
export interface DeleteStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1StorageClassRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ListStorageV1VolumeAttachmentRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface CreateStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  body: VolumeAttachment;
}
export interface DeleteStorageV1CollectionVolumeAttachmentRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
}
export interface ReadStorageV1VolumeAttachmentRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: VolumeAttachment;
}
export interface DeleteStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
}
export interface PatchStorageV1VolumeAttachmentRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface ReadStorageV1VolumeAttachmentStatusRequest {
  pretty?: string;
  name: string;
}
export interface ReplaceStorageV1VolumeAttachmentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  body: VolumeAttachment;
}
export interface PatchStorageV1VolumeAttachmentStatusRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  body: Patch;
}
export interface WatchStorageV1CSIDriverListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1CSIDriverRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchStorageV1CSINodeListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1CSINodeRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchStorageV1StorageClassListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1StorageClassRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface WatchStorageV1VolumeAttachmentListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1VolumeAttachmentRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
}
export interface GetStorageV1beta1APIResourcesRequest {}
export interface ListStorageV1beta1CSIStorageCapacityForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface ListStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface CreateStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  namespace: string;
  body: CSIStorageCapacity;
}
export interface DeleteStorageV1beta1CollectionNamespacedCSIStorageCapacityRequest {
  pretty?: string;
  continue?: string;
  dryRun?: string;
  fieldSelector?: string;
  gracePeriodSeconds?: number;
  labelSelector?: string;
  limit?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  namespace: string;
}
export interface ReadStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  name: string;
  namespace: string;
}
export interface ReplaceStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  name: string;
  namespace: string;
  body: CSIStorageCapacity;
}
export interface DeleteStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  gracePeriodSeconds?: number;
  orphanDependents?: boolean;
  propagationPolicy?: string;
  name: string;
  namespace: string;
}
export interface PatchStorageV1beta1NamespacedCSIStorageCapacityRequest {
  pretty?: string;
  dryRun?: string;
  fieldManager?: string;
  force?: boolean;
  name: string;
  namespace: string;
  body: Patch;
}
export interface WatchStorageV1beta1CSIStorageCapacityListForAllNamespacesRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
}
export interface WatchStorageV1beta1NamespacedCSIStorageCapacityListRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  namespace: string;
}
export interface WatchStorageV1beta1NamespacedCSIStorageCapacityRequest {
  allowWatchBookmarks?: boolean;
  continue?: string;
  fieldSelector?: string;
  labelSelector?: string;
  limit?: number;
  pretty?: string;
  resourceVersion?: string;
  resourceVersionMatch?: string;
  timeoutSeconds?: number;
  watch?: boolean;
  name: string;
  namespace: string;
}
export interface LogFileListHandlerRequest {}
export interface LogFileHandlerRequest {
  logpath: string;
}
export interface GetServiceAccountIssuerOpenIDKeysetRequest {}
export interface GetCodeVersionRequest {}
class KubernetesClient extends APIClient {
  constructor(options) {
    super(options);
  }
  async getSwaggerJSON() {
    const path = "/openapi/v2";
    return this.get(path);
  }
  /* get service account issuer OpenID configuration, also known as the 'OIDC discovery doc' */
  async getServiceAccountIssuerOpenIDConfiguration() {
    const path = "/.well-known/openid-configuration/";
    return this.get(path);
  }
  /* get available API versions */
  async getCoreAPIVersions() {
    const path = "/api/";
    return this.get(path);
  }
  /* get available resources */
  async getCoreV1APIResources() {
    const path = "/api/v1/";
    return this.get(path);
  }
  /* list objects of kind ComponentStatus */
  async listCoreV1ComponentStatus() {
    const path = "/api/v1/componentstatuses";
    return this.get(path);
  }
  /* read the specified ComponentStatus */
  async readCoreV1ComponentStatus() {
    const path = "/api/v1/componentstatuses/{name}";
    return this.get(path);
  }
  /* list or watch objects of kind ConfigMap */
  async listCoreV1ConfigMapForAllNamespaces() {
    const path = "/api/v1/configmaps";
    return this.get(path);
  }
  /* list or watch objects of kind Endpoints */
  async listCoreV1EndpointsForAllNamespaces() {
    const path = "/api/v1/endpoints";
    return this.get(path);
  }
  /* list or watch objects of kind Event */
  async listCoreV1EventForAllNamespaces() {
    const path = "/api/v1/events";
    return this.get(path);
  }
  /* list or watch objects of kind LimitRange */
  async listCoreV1LimitRangeForAllNamespaces() {
    const path = "/api/v1/limitranges";
    return this.get(path);
  }
  /* list or watch objects of kind Namespace */
  async listCoreV1Namespace(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces";
    return this.get(path);
  }
  /* create a Namespace */
  async createCoreV1Namespace(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces";
    return this.post(path);
  }
  /* create a Binding */
  async createCoreV1NamespacedBinding(body) {
    const path = "/api/v1/namespaces/{namespace}/bindings";
    return this.post(path);
  }
  /* list or watch objects of kind ConfigMap */
  async listCoreV1NamespacedConfigMap(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/configmaps";
    return this.get(path);
  }
  /* create a ConfigMap */
  async createCoreV1NamespacedConfigMap(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/configmaps";
    return this.post(path);
  }
  /* delete collection of ConfigMap */
  async deleteCoreV1CollectionNamespacedConfigMap(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/configmaps";
    return this.delete(path);
  }
  /* read the specified ConfigMap */
  async readCoreV1NamespacedConfigMap() {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.get(path);
  }
  /* replace the specified ConfigMap */
  async replaceCoreV1NamespacedConfigMap(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.put(path);
  }
  /* delete a ConfigMap */
  async deleteCoreV1NamespacedConfigMap(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.delete(path);
  }
  /* partially update the specified ConfigMap */
  async patchCoreV1NamespacedConfigMap(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/configmaps/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind Endpoints */
  async listCoreV1NamespacedEndpoints(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/endpoints";
    return this.get(path);
  }
  /* create Endpoints */
  async createCoreV1NamespacedEndpoints(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/endpoints";
    return this.post(path);
  }
  /* delete collection of Endpoints */
  async deleteCoreV1CollectionNamespacedEndpoints(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/endpoints";
    return this.delete(path);
  }
  /* read the specified Endpoints */
  async readCoreV1NamespacedEndpoints() {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.get(path);
  }
  /* replace the specified Endpoints */
  async replaceCoreV1NamespacedEndpoints(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.put(path);
  }
  /* delete Endpoints */
  async deleteCoreV1NamespacedEndpoints(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.delete(path);
  }
  /* partially update the specified Endpoints */
  async patchCoreV1NamespacedEndpoints(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/endpoints/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind Event */
  async listCoreV1NamespacedEvent(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/events";
    return this.get(path);
  }
  /* create an Event */
  async createCoreV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/events";
    return this.post(path);
  }
  /* delete collection of Event */
  async deleteCoreV1CollectionNamespacedEvent(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/events";
    return this.delete(path);
  }
  /* read the specified Event */
  async readCoreV1NamespacedEvent() {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  /* replace the specified Event */
  async replaceCoreV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.put(path);
  }
  /* delete an Event */
  async deleteCoreV1NamespacedEvent(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.delete(path);
  }
  /* partially update the specified Event */
  async patchCoreV1NamespacedEvent(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/events/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind LimitRange */
  async listCoreV1NamespacedLimitRange(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/limitranges";
    return this.get(path);
  }
  /* create a LimitRange */
  async createCoreV1NamespacedLimitRange(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/limitranges";
    return this.post(path);
  }
  /* delete collection of LimitRange */
  async deleteCoreV1CollectionNamespacedLimitRange(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/limitranges";
    return this.delete(path);
  }
  /* read the specified LimitRange */
  async readCoreV1NamespacedLimitRange() {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.get(path);
  }
  /* replace the specified LimitRange */
  async replaceCoreV1NamespacedLimitRange(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.put(path);
  }
  /* delete a LimitRange */
  async deleteCoreV1NamespacedLimitRange(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.delete(path);
  }
  /* partially update the specified LimitRange */
  async patchCoreV1NamespacedLimitRange(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/limitranges/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind PersistentVolumeClaim */
  async listCoreV1NamespacedPersistentVolumeClaim(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims";
    return this.get(path);
  }
  /* create a PersistentVolumeClaim */
  async createCoreV1NamespacedPersistentVolumeClaim(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims";
    return this.post(path);
  }
  /* delete collection of PersistentVolumeClaim */
  async deleteCoreV1CollectionNamespacedPersistentVolumeClaim(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims";
    return this.delete(path);
  }
  /* read the specified PersistentVolumeClaim */
  async readCoreV1NamespacedPersistentVolumeClaim() {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.get(path);
  }
  /* replace the specified PersistentVolumeClaim */
  async replaceCoreV1NamespacedPersistentVolumeClaim(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.put(path);
  }
  /* delete a PersistentVolumeClaim */
  async deleteCoreV1NamespacedPersistentVolumeClaim(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.delete(path);
  }
  /* partially update the specified PersistentVolumeClaim */
  async patchCoreV1NamespacedPersistentVolumeClaim(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.patch(path);
  }
  /* read status of the specified PersistentVolumeClaim */
  async readCoreV1NamespacedPersistentVolumeClaimStatus() {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified PersistentVolumeClaim */
  async replaceCoreV1NamespacedPersistentVolumeClaimStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified PersistentVolumeClaim */
  async patchCoreV1NamespacedPersistentVolumeClaimStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind Pod */
  async listCoreV1NamespacedPod(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/pods";
    return this.get(path);
  }
  /* create a Pod */
  async createCoreV1NamespacedPod(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/pods";
    return this.post(path);
  }
  /* delete collection of Pod */
  async deleteCoreV1CollectionNamespacedPod(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/pods";
    return this.delete(path);
  }
  /* read the specified Pod */
  async readCoreV1NamespacedPod() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.get(path);
  }
  /* replace the specified Pod */
  async replaceCoreV1NamespacedPod(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.put(path);
  }
  /* delete a Pod */
  async deleteCoreV1NamespacedPod(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.delete(path);
  }
  /* partially update the specified Pod */
  async patchCoreV1NamespacedPod(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}";
    return this.patch(path);
  }
  /* connect GET requests to attach of Pod */
  async connectCoreV1GetNamespacedPodAttach() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/attach";
    return this.get(path);
  }
  /* connect POST requests to attach of Pod */
  async connectCoreV1PostNamespacedPodAttach() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/attach";
    return this.post(path);
  }
  /* create binding of a Pod */
  async createCoreV1NamespacedPodBinding(body) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/binding";
    return this.post(path);
  }
  /* create eviction of a Pod */
  async createCoreV1NamespacedPodEviction(body) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/eviction";
    return this.post(path);
  }
  /* connect GET requests to exec of Pod */
  async connectCoreV1GetNamespacedPodExec() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/exec";
    return this.get(path);
  }
  /* connect POST requests to exec of Pod */
  async connectCoreV1PostNamespacedPodExec() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/exec";
    return this.post(path);
  }
  /* read log of the specified Pod */
  async readCoreV1NamespacedPodLog() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/log";
    return this.get(path);
  }
  /* connect GET requests to portforward of Pod */
  async connectCoreV1GetNamespacedPodPortforward() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/portforward";
    return this.get(path);
  }
  /* connect POST requests to portforward of Pod */
  async connectCoreV1PostNamespacedPodPortforward() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/portforward";
    return this.post(path);
  }
  /* connect GET requests to proxy of Pod */
  async connectCoreV1GetNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.get(path);
  }
  /* connect POST requests to proxy of Pod */
  async connectCoreV1PostNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.post(path);
  }
  /* connect PUT requests to proxy of Pod */
  async connectCoreV1PutNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.put(path);
  }
  /* connect DELETE requests to proxy of Pod */
  async connectCoreV1DeleteNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.delete(path);
  }
  /* connect OPTIONS requests to proxy of Pod */
  async connectCoreV1OptionsNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.options(path);
  }
  /* connect HEAD requests to proxy of Pod */
  async connectCoreV1HeadNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.head(path);
  }
  /* connect PATCH requests to proxy of Pod */
  async connectCoreV1PatchNamespacedPodProxy() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy";
    return this.patch(path);
  }
  /* connect GET requests to proxy of Pod */
  async connectCoreV1GetNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.get(path);
  }
  /* connect POST requests to proxy of Pod */
  async connectCoreV1PostNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.post(path);
  }
  /* connect PUT requests to proxy of Pod */
  async connectCoreV1PutNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.put(path);
  }
  /* connect DELETE requests to proxy of Pod */
  async connectCoreV1DeleteNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.delete(path);
  }
  /* connect OPTIONS requests to proxy of Pod */
  async connectCoreV1OptionsNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.options(path);
  }
  /* connect HEAD requests to proxy of Pod */
  async connectCoreV1HeadNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.head(path);
  }
  /* connect PATCH requests to proxy of Pod */
  async connectCoreV1PatchNamespacedPodProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}";
    return this.patch(path);
  }
  /* read status of the specified Pod */
  async readCoreV1NamespacedPodStatus() {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Pod */
  async replaceCoreV1NamespacedPodStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Pod */
  async patchCoreV1NamespacedPodStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/pods/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind PodTemplate */
  async listCoreV1NamespacedPodTemplate(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates";
    return this.get(path);
  }
  /* create a PodTemplate */
  async createCoreV1NamespacedPodTemplate(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates";
    return this.post(path);
  }
  /* delete collection of PodTemplate */
  async deleteCoreV1CollectionNamespacedPodTemplate(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates";
    return this.delete(path);
  }
  /* read the specified PodTemplate */
  async readCoreV1NamespacedPodTemplate() {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.get(path);
  }
  /* replace the specified PodTemplate */
  async replaceCoreV1NamespacedPodTemplate(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.put(path);
  }
  /* delete a PodTemplate */
  async deleteCoreV1NamespacedPodTemplate(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.delete(path);
  }
  /* partially update the specified PodTemplate */
  async patchCoreV1NamespacedPodTemplate(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/podtemplates/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind ReplicationController */
  async listCoreV1NamespacedReplicationController(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers";
    return this.get(path);
  }
  /* create a ReplicationController */
  async createCoreV1NamespacedReplicationController(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers";
    return this.post(path);
  }
  /* delete collection of ReplicationController */
  async deleteCoreV1CollectionNamespacedReplicationController(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers";
    return this.delete(path);
  }
  /* read the specified ReplicationController */
  async readCoreV1NamespacedReplicationController() {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.get(path);
  }
  /* replace the specified ReplicationController */
  async replaceCoreV1NamespacedReplicationController(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.put(path);
  }
  /* delete a ReplicationController */
  async deleteCoreV1NamespacedReplicationController(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.delete(path);
  }
  /* partially update the specified ReplicationController */
  async patchCoreV1NamespacedReplicationController(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.patch(path);
  }
  /* read scale of the specified ReplicationController */
  async readCoreV1NamespacedReplicationControllerScale() {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale";
    return this.get(path);
  }
  /* replace scale of the specified ReplicationController */
  async replaceCoreV1NamespacedReplicationControllerScale(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale";
    return this.put(path);
  }
  /* partially update scale of the specified ReplicationController */
  async patchCoreV1NamespacedReplicationControllerScale(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale";
    return this.patch(path);
  }
  /* read status of the specified ReplicationController */
  async readCoreV1NamespacedReplicationControllerStatus() {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified ReplicationController */
  async replaceCoreV1NamespacedReplicationControllerStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified ReplicationController */
  async patchCoreV1NamespacedReplicationControllerStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind ResourceQuota */
  async listCoreV1NamespacedResourceQuota(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas";
    return this.get(path);
  }
  /* create a ResourceQuota */
  async createCoreV1NamespacedResourceQuota(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas";
    return this.post(path);
  }
  /* delete collection of ResourceQuota */
  async deleteCoreV1CollectionNamespacedResourceQuota(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas";
    return this.delete(path);
  }
  /* read the specified ResourceQuota */
  async readCoreV1NamespacedResourceQuota() {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.get(path);
  }
  /* replace the specified ResourceQuota */
  async replaceCoreV1NamespacedResourceQuota(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.put(path);
  }
  /* delete a ResourceQuota */
  async deleteCoreV1NamespacedResourceQuota(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.delete(path);
  }
  /* partially update the specified ResourceQuota */
  async patchCoreV1NamespacedResourceQuota(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}";
    return this.patch(path);
  }
  /* read status of the specified ResourceQuota */
  async readCoreV1NamespacedResourceQuotaStatus() {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified ResourceQuota */
  async replaceCoreV1NamespacedResourceQuotaStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified ResourceQuota */
  async patchCoreV1NamespacedResourceQuotaStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/resourcequotas/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind Secret */
  async listCoreV1NamespacedSecret(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/secrets";
    return this.get(path);
  }
  /* create a Secret */
  async createCoreV1NamespacedSecret(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/secrets";
    return this.post(path);
  }
  /* delete collection of Secret */
  async deleteCoreV1CollectionNamespacedSecret(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/secrets";
    return this.delete(path);
  }
  /* read the specified Secret */
  async readCoreV1NamespacedSecret() {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.get(path);
  }
  /* replace the specified Secret */
  async replaceCoreV1NamespacedSecret(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.put(path);
  }
  /* delete a Secret */
  async deleteCoreV1NamespacedSecret(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.delete(path);
  }
  /* partially update the specified Secret */
  async patchCoreV1NamespacedSecret(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/secrets/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind ServiceAccount */
  async listCoreV1NamespacedServiceAccount(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts";
    return this.get(path);
  }
  /* create a ServiceAccount */
  async createCoreV1NamespacedServiceAccount(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts";
    return this.post(path);
  }
  /* delete collection of ServiceAccount */
  async deleteCoreV1CollectionNamespacedServiceAccount(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts";
    return this.delete(path);
  }
  /* read the specified ServiceAccount */
  async readCoreV1NamespacedServiceAccount() {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.get(path);
  }
  /* replace the specified ServiceAccount */
  async replaceCoreV1NamespacedServiceAccount(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.put(path);
  }
  /* delete a ServiceAccount */
  async deleteCoreV1NamespacedServiceAccount(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.delete(path);
  }
  /* partially update the specified ServiceAccount */
  async patchCoreV1NamespacedServiceAccount(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}";
    return this.patch(path);
  }
  /* create token of a ServiceAccount */
  async createCoreV1NamespacedServiceAccountToken(body) {
    const path = "/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token";
    return this.post(path);
  }
  /* list or watch objects of kind Service */
  async listCoreV1NamespacedService(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/namespaces/{namespace}/services";
    return this.get(path);
  }
  /* create a Service */
  async createCoreV1NamespacedService(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/services";
    return this.post(path);
  }
  /* read the specified Service */
  async readCoreV1NamespacedService() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.get(path);
  }
  /* replace the specified Service */
  async replaceCoreV1NamespacedService(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.put(path);
  }
  /* delete a Service */
  async deleteCoreV1NamespacedService(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.delete(path);
  }
  /* partially update the specified Service */
  async patchCoreV1NamespacedService(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}";
    return this.patch(path);
  }
  /* connect GET requests to proxy of Service */
  async connectCoreV1GetNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.get(path);
  }
  /* connect POST requests to proxy of Service */
  async connectCoreV1PostNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.post(path);
  }
  /* connect PUT requests to proxy of Service */
  async connectCoreV1PutNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.put(path);
  }
  /* connect DELETE requests to proxy of Service */
  async connectCoreV1DeleteNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.delete(path);
  }
  /* connect OPTIONS requests to proxy of Service */
  async connectCoreV1OptionsNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.options(path);
  }
  /* connect HEAD requests to proxy of Service */
  async connectCoreV1HeadNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.head(path);
  }
  /* connect PATCH requests to proxy of Service */
  async connectCoreV1PatchNamespacedServiceProxy() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy";
    return this.patch(path);
  }
  /* connect GET requests to proxy of Service */
  async connectCoreV1GetNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.get(path);
  }
  /* connect POST requests to proxy of Service */
  async connectCoreV1PostNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.post(path);
  }
  /* connect PUT requests to proxy of Service */
  async connectCoreV1PutNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.put(path);
  }
  /* connect DELETE requests to proxy of Service */
  async connectCoreV1DeleteNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.delete(path);
  }
  /* connect OPTIONS requests to proxy of Service */
  async connectCoreV1OptionsNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.options(path);
  }
  /* connect HEAD requests to proxy of Service */
  async connectCoreV1HeadNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.head(path);
  }
  /* connect PATCH requests to proxy of Service */
  async connectCoreV1PatchNamespacedServiceProxyWithPath() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}";
    return this.patch(path);
  }
  /* read status of the specified Service */
  async readCoreV1NamespacedServiceStatus() {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Service */
  async replaceCoreV1NamespacedServiceStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Service */
  async patchCoreV1NamespacedServiceStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{namespace}/services/{name}/status";
    return this.patch(path);
  }
  /* read the specified Namespace */
  async readCoreV1Namespace() {
    const path = "/api/v1/namespaces/{name}";
    return this.get(path);
  }
  /* replace the specified Namespace */
  async replaceCoreV1Namespace(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{name}";
    return this.put(path);
  }
  /* delete a Namespace */
  async deleteCoreV1Namespace(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/namespaces/{name}";
    return this.delete(path);
  }
  /* partially update the specified Namespace */
  async patchCoreV1Namespace(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{name}";
    return this.patch(path);
  }
  /* replace finalize of the specified Namespace */
  async replaceCoreV1NamespaceFinalize(body) {
    const path = "/api/v1/namespaces/{name}/finalize";
    return this.put(path);
  }
  /* read status of the specified Namespace */
  async readCoreV1NamespaceStatus() {
    const path = "/api/v1/namespaces/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Namespace */
  async replaceCoreV1NamespaceStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/namespaces/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Namespace */
  async patchCoreV1NamespaceStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/namespaces/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind Node */
  async listCoreV1Node(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/nodes";
    return this.get(path);
  }
  /* create a Node */
  async createCoreV1Node(body, dryRun, fieldManager) {
    const path = "/api/v1/nodes";
    return this.post(path);
  }
  /* delete collection of Node */
  async deleteCoreV1CollectionNode(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/nodes";
    return this.delete(path);
  }
  /* read the specified Node */
  async readCoreV1Node() {
    const path = "/api/v1/nodes/{name}";
    return this.get(path);
  }
  /* replace the specified Node */
  async replaceCoreV1Node(body, dryRun, fieldManager) {
    const path = "/api/v1/nodes/{name}";
    return this.put(path);
  }
  /* delete a Node */
  async deleteCoreV1Node(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/nodes/{name}";
    return this.delete(path);
  }
  /* partially update the specified Node */
  async patchCoreV1Node(body, dryRun, fieldManager, force) {
    const path = "/api/v1/nodes/{name}";
    return this.patch(path);
  }
  /* connect GET requests to proxy of Node */
  async connectCoreV1GetNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.get(path);
  }
  /* connect POST requests to proxy of Node */
  async connectCoreV1PostNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.post(path);
  }
  /* connect PUT requests to proxy of Node */
  async connectCoreV1PutNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.put(path);
  }
  /* connect DELETE requests to proxy of Node */
  async connectCoreV1DeleteNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.delete(path);
  }
  /* connect OPTIONS requests to proxy of Node */
  async connectCoreV1OptionsNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.options(path);
  }
  /* connect HEAD requests to proxy of Node */
  async connectCoreV1HeadNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.head(path);
  }
  /* connect PATCH requests to proxy of Node */
  async connectCoreV1PatchNodeProxy() {
    const path = "/api/v1/nodes/{name}/proxy";
    return this.patch(path);
  }
  /* connect GET requests to proxy of Node */
  async connectCoreV1GetNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.get(path);
  }
  /* connect POST requests to proxy of Node */
  async connectCoreV1PostNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.post(path);
  }
  /* connect PUT requests to proxy of Node */
  async connectCoreV1PutNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.put(path);
  }
  /* connect DELETE requests to proxy of Node */
  async connectCoreV1DeleteNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.delete(path);
  }
  /* connect OPTIONS requests to proxy of Node */
  async connectCoreV1OptionsNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.options(path);
  }
  /* connect HEAD requests to proxy of Node */
  async connectCoreV1HeadNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.head(path);
  }
  /* connect PATCH requests to proxy of Node */
  async connectCoreV1PatchNodeProxyWithPath() {
    const path = "/api/v1/nodes/{name}/proxy/{path}";
    return this.patch(path);
  }
  /* read status of the specified Node */
  async readCoreV1NodeStatus() {
    const path = "/api/v1/nodes/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Node */
  async replaceCoreV1NodeStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/nodes/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Node */
  async patchCoreV1NodeStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/nodes/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind PersistentVolumeClaim */
  async listCoreV1PersistentVolumeClaimForAllNamespaces() {
    const path = "/api/v1/persistentvolumeclaims";
    return this.get(path);
  }
  /* list or watch objects of kind PersistentVolume */
  async listCoreV1PersistentVolume(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/api/v1/persistentvolumes";
    return this.get(path);
  }
  /* create a PersistentVolume */
  async createCoreV1PersistentVolume(body, dryRun, fieldManager) {
    const path = "/api/v1/persistentvolumes";
    return this.post(path);
  }
  /* delete collection of PersistentVolume */
  async deleteCoreV1CollectionPersistentVolume(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/api/v1/persistentvolumes";
    return this.delete(path);
  }
  /* read the specified PersistentVolume */
  async readCoreV1PersistentVolume() {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.get(path);
  }
  /* replace the specified PersistentVolume */
  async replaceCoreV1PersistentVolume(body, dryRun, fieldManager) {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.put(path);
  }
  /* delete a PersistentVolume */
  async deleteCoreV1PersistentVolume(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.delete(path);
  }
  /* partially update the specified PersistentVolume */
  async patchCoreV1PersistentVolume(body, dryRun, fieldManager, force) {
    const path = "/api/v1/persistentvolumes/{name}";
    return this.patch(path);
  }
  /* read status of the specified PersistentVolume */
  async readCoreV1PersistentVolumeStatus() {
    const path = "/api/v1/persistentvolumes/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified PersistentVolume */
  async replaceCoreV1PersistentVolumeStatus(body, dryRun, fieldManager) {
    const path = "/api/v1/persistentvolumes/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified PersistentVolume */
  async patchCoreV1PersistentVolumeStatus(body, dryRun, fieldManager, force) {
    const path = "/api/v1/persistentvolumes/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind Pod */
  async listCoreV1PodForAllNamespaces() {
    const path = "/api/v1/pods";
    return this.get(path);
  }
  /* list or watch objects of kind PodTemplate */
  async listCoreV1PodTemplateForAllNamespaces() {
    const path = "/api/v1/podtemplates";
    return this.get(path);
  }
  /* list or watch objects of kind ReplicationController */
  async listCoreV1ReplicationControllerForAllNamespaces() {
    const path = "/api/v1/replicationcontrollers";
    return this.get(path);
  }
  /* list or watch objects of kind ResourceQuota */
  async listCoreV1ResourceQuotaForAllNamespaces() {
    const path = "/api/v1/resourcequotas";
    return this.get(path);
  }
  /* list or watch objects of kind Secret */
  async listCoreV1SecretForAllNamespaces() {
    const path = "/api/v1/secrets";
    return this.get(path);
  }
  /* list or watch objects of kind ServiceAccount */
  async listCoreV1ServiceAccountForAllNamespaces() {
    const path = "/api/v1/serviceaccounts";
    return this.get(path);
  }
  /* list or watch objects of kind Service */
  async listCoreV1ServiceForAllNamespaces() {
    const path = "/api/v1/services";
    return this.get(path);
  }
  /* watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1ConfigMapListForAllNamespaces() {
    const path = "/api/v1/watch/configmaps";
    return this.get(path);
  }
  /* watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1EndpointsListForAllNamespaces() {
    const path = "/api/v1/watch/endpoints";
    return this.get(path);
  }
  /* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1EventListForAllNamespaces() {
    const path = "/api/v1/watch/events";
    return this.get(path);
  }
  /* watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1LimitRangeListForAllNamespaces() {
    const path = "/api/v1/watch/limitranges";
    return this.get(path);
  }
  /* watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespaceList() {
    const path = "/api/v1/watch/namespaces";
    return this.get(path);
  }
  /* watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedConfigMapList() {
    const path = "/api/v1/watch/namespaces/{namespace}/configmaps";
    return this.get(path);
  }
  /* watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedConfigMap() {
    const path = "/api/v1/watch/namespaces/{namespace}/configmaps/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedEndpointsList() {
    const path = "/api/v1/watch/namespaces/{namespace}/endpoints";
    return this.get(path);
  }
  /* watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedEndpoints() {
    const path = "/api/v1/watch/namespaces/{namespace}/endpoints/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedEventList() {
    const path = "/api/v1/watch/namespaces/{namespace}/events";
    return this.get(path);
  }
  /* watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedEvent() {
    const path = "/api/v1/watch/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedLimitRangeList() {
    const path = "/api/v1/watch/namespaces/{namespace}/limitranges";
    return this.get(path);
  }
  /* watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedLimitRange() {
    const path = "/api/v1/watch/namespaces/{namespace}/limitranges/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedPersistentVolumeClaimList() {
    const path = "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims";
    return this.get(path);
  }
  /* watch changes to an object of kind PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedPersistentVolumeClaim() {
    const path = "/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedPodList() {
    const path = "/api/v1/watch/namespaces/{namespace}/pods";
    return this.get(path);
  }
  /* watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedPod() {
    const path = "/api/v1/watch/namespaces/{namespace}/pods/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedPodTemplateList() {
    const path = "/api/v1/watch/namespaces/{namespace}/podtemplates";
    return this.get(path);
  }
  /* watch changes to an object of kind PodTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedPodTemplate() {
    const path = "/api/v1/watch/namespaces/{namespace}/podtemplates/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedReplicationControllerList() {
    const path = "/api/v1/watch/namespaces/{namespace}/replicationcontrollers";
    return this.get(path);
  }
  /* watch changes to an object of kind ReplicationController. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedReplicationController() {
    const path = "/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedResourceQuotaList() {
    const path = "/api/v1/watch/namespaces/{namespace}/resourcequotas";
    return this.get(path);
  }
  /* watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedResourceQuota() {
    const path = "/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedSecretList() {
    const path = "/api/v1/watch/namespaces/{namespace}/secrets";
    return this.get(path);
  }
  /* watch changes to an object of kind Secret. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedSecret() {
    const path = "/api/v1/watch/namespaces/{namespace}/secrets/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedServiceAccountList() {
    const path = "/api/v1/watch/namespaces/{namespace}/serviceaccounts";
    return this.get(path);
  }
  /* watch changes to an object of kind ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedServiceAccount() {
    const path = "/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NamespacedServiceList() {
    const path = "/api/v1/watch/namespaces/{namespace}/services";
    return this.get(path);
  }
  /* watch changes to an object of kind Service. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1NamespacedService() {
    const path = "/api/v1/watch/namespaces/{namespace}/services/{name}";
    return this.get(path);
  }
  /* watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1Namespace() {
    const path = "/api/v1/watch/namespaces/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Node. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1NodeList() {
    const path = "/api/v1/watch/nodes";
    return this.get(path);
  }
  /* watch changes to an object of kind Node. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1Node() {
    const path = "/api/v1/watch/nodes/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1PersistentVolumeClaimListForAllNamespaces() {
    const path = "/api/v1/watch/persistentvolumeclaims";
    return this.get(path);
  }
  /* watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1PersistentVolumeList() {
    const path = "/api/v1/watch/persistentvolumes";
    return this.get(path);
  }
  /* watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoreV1PersistentVolume() {
    const path = "/api/v1/watch/persistentvolumes/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1PodListForAllNamespaces() {
    const path = "/api/v1/watch/pods";
    return this.get(path);
  }
  /* watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1PodTemplateListForAllNamespaces() {
    const path = "/api/v1/watch/podtemplates";
    return this.get(path);
  }
  /* watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1ReplicationControllerListForAllNamespaces() {
    const path = "/api/v1/watch/replicationcontrollers";
    return this.get(path);
  }
  /* watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1ResourceQuotaListForAllNamespaces() {
    const path = "/api/v1/watch/resourcequotas";
    return this.get(path);
  }
  /* watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1SecretListForAllNamespaces() {
    const path = "/api/v1/watch/secrets";
    return this.get(path);
  }
  /* watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1ServiceAccountListForAllNamespaces() {
    const path = "/api/v1/watch/serviceaccounts";
    return this.get(path);
  }
  /* watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoreV1ServiceListForAllNamespaces() {
    const path = "/api/v1/watch/services";
    return this.get(path);
  }
  /* get available API versions */
  async getAPIVersions() {
    const path = "/apis/";
    return this.get(path);
  }
  /* get information of a group */
  async getAdmissionregistrationAPIGroup() {
    const path = "/apis/admissionregistration.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getAdmissionregistrationV1APIResources() {
    const path = "/apis/admissionregistration.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind MutatingWebhookConfiguration */
  async listAdmissionregistrationV1MutatingWebhookConfiguration(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations";
    return this.get(path);
  }
  /* create a MutatingWebhookConfiguration */
  async createAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations";
    return this.post(path);
  }
  /* delete collection of MutatingWebhookConfiguration */
  async deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations";
    return this.delete(path);
  }
  /* read the specified MutatingWebhookConfiguration */
  async readAdmissionregistrationV1MutatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  /* replace the specified MutatingWebhookConfiguration */
  async replaceAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.put(path);
  }
  /* delete a MutatingWebhookConfiguration */
  async deleteAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.delete(path);
  }
  /* partially update the specified MutatingWebhookConfiguration */
  async patchAdmissionregistrationV1MutatingWebhookConfiguration(body, dryRun, fieldManager, force) {
    const path = "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind ValidatingWebhookConfiguration */
  async listAdmissionregistrationV1ValidatingWebhookConfiguration(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations";
    return this.get(path);
  }
  /* create a ValidatingWebhookConfiguration */
  async createAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations";
    return this.post(path);
  }
  /* delete collection of ValidatingWebhookConfiguration */
  async deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations";
    return this.delete(path);
  }
  /* read the specified ValidatingWebhookConfiguration */
  async readAdmissionregistrationV1ValidatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  /* replace the specified ValidatingWebhookConfiguration */
  async replaceAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.put(path);
  }
  /* delete a ValidatingWebhookConfiguration */
  async deleteAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.delete(path);
  }
  /* partially update the specified ValidatingWebhookConfiguration */
  async patchAdmissionregistrationV1ValidatingWebhookConfiguration(body, dryRun, fieldManager, force) {
    const path = "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAdmissionregistrationV1MutatingWebhookConfigurationList() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations";
    return this.get(path);
  }
  /* watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAdmissionregistrationV1MutatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAdmissionregistrationV1ValidatingWebhookConfigurationList() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations";
    return this.get(path);
  }
  /* watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAdmissionregistrationV1ValidatingWebhookConfiguration() {
    const path = "/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getApiextensionsAPIGroup() {
    const path = "/apis/apiextensions.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getApiextensionsV1APIResources() {
    const path = "/apis/apiextensions.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind CustomResourceDefinition */
  async listApiextensionsV1CustomResourceDefinition(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions";
    return this.get(path);
  }
  /* create a CustomResourceDefinition */
  async createApiextensionsV1CustomResourceDefinition(body, dryRun, fieldManager) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions";
    return this.post(path);
  }
  /* delete collection of CustomResourceDefinition */
  async deleteApiextensionsV1CollectionCustomResourceDefinition(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions";
    return this.delete(path);
  }
  /* read the specified CustomResourceDefinition */
  async readApiextensionsV1CustomResourceDefinition() {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.get(path);
  }
  /* replace the specified CustomResourceDefinition */
  async replaceApiextensionsV1CustomResourceDefinition(body, dryRun, fieldManager) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.put(path);
  }
  /* delete a CustomResourceDefinition */
  async deleteApiextensionsV1CustomResourceDefinition(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.delete(path);
  }
  /* partially update the specified CustomResourceDefinition */
  async patchApiextensionsV1CustomResourceDefinition(body, dryRun, fieldManager, force) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}";
    return this.patch(path);
  }
  /* read status of the specified CustomResourceDefinition */
  async readApiextensionsV1CustomResourceDefinitionStatus() {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified CustomResourceDefinition */
  async replaceApiextensionsV1CustomResourceDefinitionStatus(body, dryRun, fieldManager) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified CustomResourceDefinition */
  async patchApiextensionsV1CustomResourceDefinitionStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchApiextensionsV1CustomResourceDefinitionList() {
    const path = "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions";
    return this.get(path);
  }
  /* watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchApiextensionsV1CustomResourceDefinition() {
    const path = "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getApiregistrationAPIGroup() {
    const path = "/apis/apiregistration.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getApiregistrationV1APIResources() {
    const path = "/apis/apiregistration.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind APIService */
  async listApiregistrationV1APIService(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices";
    return this.get(path);
  }
  /* create an APIService */
  async createApiregistrationV1APIService(body, dryRun, fieldManager) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices";
    return this.post(path);
  }
  /* delete collection of APIService */
  async deleteApiregistrationV1CollectionAPIService(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices";
    return this.delete(path);
  }
  /* read the specified APIService */
  async readApiregistrationV1APIService() {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.get(path);
  }
  /* replace the specified APIService */
  async replaceApiregistrationV1APIService(body, dryRun, fieldManager) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.put(path);
  }
  /* delete an APIService */
  async deleteApiregistrationV1APIService(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.delete(path);
  }
  /* partially update the specified APIService */
  async patchApiregistrationV1APIService(body, dryRun, fieldManager, force) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}";
    return this.patch(path);
  }
  /* read status of the specified APIService */
  async readApiregistrationV1APIServiceStatus() {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified APIService */
  async replaceApiregistrationV1APIServiceStatus(body, dryRun, fieldManager) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified APIService */
  async patchApiregistrationV1APIServiceStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apiregistration.k8s.io/v1/apiservices/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of APIService. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchApiregistrationV1APIServiceList() {
    const path = "/apis/apiregistration.k8s.io/v1/watch/apiservices";
    return this.get(path);
  }
  /* watch changes to an object of kind APIService. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchApiregistrationV1APIService() {
    const path = "/apis/apiregistration.k8s.io/v1/watch/apiservices/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getAppsAPIGroup() {
    const path = "/apis/apps/";
    return this.get(path);
  }
  /* get available resources */
  async getAppsV1APIResources() {
    const path = "/apis/apps/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind ControllerRevision */
  async listAppsV1ControllerRevisionForAllNamespaces() {
    const path = "/apis/apps/v1/controllerrevisions";
    return this.get(path);
  }
  /* list or watch objects of kind DaemonSet */
  async listAppsV1DaemonSetForAllNamespaces() {
    const path = "/apis/apps/v1/daemonsets";
    return this.get(path);
  }
  /* list or watch objects of kind Deployment */
  async listAppsV1DeploymentForAllNamespaces() {
    const path = "/apis/apps/v1/deployments";
    return this.get(path);
  }
  /* list or watch objects of kind ControllerRevision */
  async listAppsV1NamespacedControllerRevision(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions";
    return this.get(path);
  }
  /* create a ControllerRevision */
  async createAppsV1NamespacedControllerRevision(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions";
    return this.post(path);
  }
  /* delete collection of ControllerRevision */
  async deleteAppsV1CollectionNamespacedControllerRevision(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions";
    return this.delete(path);
  }
  /* read the specified ControllerRevision */
  async readAppsV1NamespacedControllerRevision() {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.get(path);
  }
  /* replace the specified ControllerRevision */
  async replaceAppsV1NamespacedControllerRevision(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.put(path);
  }
  /* delete a ControllerRevision */
  async deleteAppsV1NamespacedControllerRevision(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.delete(path);
  }
  /* partially update the specified ControllerRevision */
  async patchAppsV1NamespacedControllerRevision(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind DaemonSet */
  async listAppsV1NamespacedDaemonSet(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets";
    return this.get(path);
  }
  /* create a DaemonSet */
  async createAppsV1NamespacedDaemonSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets";
    return this.post(path);
  }
  /* delete collection of DaemonSet */
  async deleteAppsV1CollectionNamespacedDaemonSet(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets";
    return this.delete(path);
  }
  /* read the specified DaemonSet */
  async readAppsV1NamespacedDaemonSet() {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.get(path);
  }
  /* replace the specified DaemonSet */
  async replaceAppsV1NamespacedDaemonSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.put(path);
  }
  /* delete a DaemonSet */
  async deleteAppsV1NamespacedDaemonSet(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.delete(path);
  }
  /* partially update the specified DaemonSet */
  async patchAppsV1NamespacedDaemonSet(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}";
    return this.patch(path);
  }
  /* read status of the specified DaemonSet */
  async readAppsV1NamespacedDaemonSetStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified DaemonSet */
  async replaceAppsV1NamespacedDaemonSetStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified DaemonSet */
  async patchAppsV1NamespacedDaemonSetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind Deployment */
  async listAppsV1NamespacedDeployment(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments";
    return this.get(path);
  }
  /* create a Deployment */
  async createAppsV1NamespacedDeployment(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments";
    return this.post(path);
  }
  /* delete collection of Deployment */
  async deleteAppsV1CollectionNamespacedDeployment(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments";
    return this.delete(path);
  }
  /* read the specified Deployment */
  async readAppsV1NamespacedDeployment() {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.get(path);
  }
  /* replace the specified Deployment */
  async replaceAppsV1NamespacedDeployment(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.put(path);
  }
  /* delete a Deployment */
  async deleteAppsV1NamespacedDeployment(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.delete(path);
  }
  /* partially update the specified Deployment */
  async patchAppsV1NamespacedDeployment(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}";
    return this.patch(path);
  }
  /* read scale of the specified Deployment */
  async readAppsV1NamespacedDeploymentScale() {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale";
    return this.get(path);
  }
  /* replace scale of the specified Deployment */
  async replaceAppsV1NamespacedDeploymentScale(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale";
    return this.put(path);
  }
  /* partially update scale of the specified Deployment */
  async patchAppsV1NamespacedDeploymentScale(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale";
    return this.patch(path);
  }
  /* read status of the specified Deployment */
  async readAppsV1NamespacedDeploymentStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Deployment */
  async replaceAppsV1NamespacedDeploymentStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Deployment */
  async patchAppsV1NamespacedDeploymentStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind ReplicaSet */
  async listAppsV1NamespacedReplicaSet(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets";
    return this.get(path);
  }
  /* create a ReplicaSet */
  async createAppsV1NamespacedReplicaSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets";
    return this.post(path);
  }
  /* delete collection of ReplicaSet */
  async deleteAppsV1CollectionNamespacedReplicaSet(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets";
    return this.delete(path);
  }
  /* read the specified ReplicaSet */
  async readAppsV1NamespacedReplicaSet() {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.get(path);
  }
  /* replace the specified ReplicaSet */
  async replaceAppsV1NamespacedReplicaSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.put(path);
  }
  /* delete a ReplicaSet */
  async deleteAppsV1NamespacedReplicaSet(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.delete(path);
  }
  /* partially update the specified ReplicaSet */
  async patchAppsV1NamespacedReplicaSet(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}";
    return this.patch(path);
  }
  /* read scale of the specified ReplicaSet */
  async readAppsV1NamespacedReplicaSetScale() {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale";
    return this.get(path);
  }
  /* replace scale of the specified ReplicaSet */
  async replaceAppsV1NamespacedReplicaSetScale(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale";
    return this.put(path);
  }
  /* partially update scale of the specified ReplicaSet */
  async patchAppsV1NamespacedReplicaSetScale(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale";
    return this.patch(path);
  }
  /* read status of the specified ReplicaSet */
  async readAppsV1NamespacedReplicaSetStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified ReplicaSet */
  async replaceAppsV1NamespacedReplicaSetStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified ReplicaSet */
  async patchAppsV1NamespacedReplicaSetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind StatefulSet */
  async listAppsV1NamespacedStatefulSet(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets";
    return this.get(path);
  }
  /* create a StatefulSet */
  async createAppsV1NamespacedStatefulSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets";
    return this.post(path);
  }
  /* delete collection of StatefulSet */
  async deleteAppsV1CollectionNamespacedStatefulSet(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets";
    return this.delete(path);
  }
  /* read the specified StatefulSet */
  async readAppsV1NamespacedStatefulSet() {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.get(path);
  }
  /* replace the specified StatefulSet */
  async replaceAppsV1NamespacedStatefulSet(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.put(path);
  }
  /* delete a StatefulSet */
  async deleteAppsV1NamespacedStatefulSet(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.delete(path);
  }
  /* partially update the specified StatefulSet */
  async patchAppsV1NamespacedStatefulSet(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}";
    return this.patch(path);
  }
  /* read scale of the specified StatefulSet */
  async readAppsV1NamespacedStatefulSetScale() {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale";
    return this.get(path);
  }
  /* replace scale of the specified StatefulSet */
  async replaceAppsV1NamespacedStatefulSetScale(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale";
    return this.put(path);
  }
  /* partially update scale of the specified StatefulSet */
  async patchAppsV1NamespacedStatefulSetScale(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale";
    return this.patch(path);
  }
  /* read status of the specified StatefulSet */
  async readAppsV1NamespacedStatefulSetStatus() {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified StatefulSet */
  async replaceAppsV1NamespacedStatefulSetStatus(body, dryRun, fieldManager) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified StatefulSet */
  async patchAppsV1NamespacedStatefulSetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind ReplicaSet */
  async listAppsV1ReplicaSetForAllNamespaces() {
    const path = "/apis/apps/v1/replicasets";
    return this.get(path);
  }
  /* list or watch objects of kind StatefulSet */
  async listAppsV1StatefulSetForAllNamespaces() {
    const path = "/apis/apps/v1/statefulsets";
    return this.get(path);
  }
  /* watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1ControllerRevisionListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/controllerrevisions";
    return this.get(path);
  }
  /* watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1DaemonSetListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/daemonsets";
    return this.get(path);
  }
  /* watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1DeploymentListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/deployments";
    return this.get(path);
  }
  /* watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1NamespacedControllerRevisionList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions";
    return this.get(path);
  }
  /* watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAppsV1NamespacedControllerRevision() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1NamespacedDaemonSetList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets";
    return this.get(path);
  }
  /* watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAppsV1NamespacedDaemonSet() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1NamespacedDeploymentList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/deployments";
    return this.get(path);
  }
  /* watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAppsV1NamespacedDeployment() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1NamespacedReplicaSetList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/replicasets";
    return this.get(path);
  }
  /* watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAppsV1NamespacedReplicaSet() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1NamespacedStatefulSetList() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets";
    return this.get(path);
  }
  /* watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAppsV1NamespacedStatefulSet() {
    const path = "/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1ReplicaSetListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/replicasets";
    return this.get(path);
  }
  /* watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAppsV1StatefulSetListForAllNamespaces() {
    const path = "/apis/apps/v1/watch/statefulsets";
    return this.get(path);
  }
  /* get information of a group */
  async getAuthenticationAPIGroup() {
    const path = "/apis/authentication.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getAuthenticationV1APIResources() {
    const path = "/apis/authentication.k8s.io/v1/";
    return this.get(path);
  }
  /* create a TokenReview */
  async createAuthenticationV1TokenReview(body) {
    const path = "/apis/authentication.k8s.io/v1/tokenreviews";
    return this.post(path);
  }
  /* get information of a group */
  async getAuthorizationAPIGroup() {
    const path = "/apis/authorization.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getAuthorizationV1APIResources() {
    const path = "/apis/authorization.k8s.io/v1/";
    return this.get(path);
  }
  /* create a LocalSubjectAccessReview */
  async createAuthorizationV1NamespacedLocalSubjectAccessReview(body) {
    const path = "/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews";
    return this.post(path);
  }
  /* create a SelfSubjectAccessReview */
  async createAuthorizationV1SelfSubjectAccessReview(body) {
    const path = "/apis/authorization.k8s.io/v1/selfsubjectaccessreviews";
    return this.post(path);
  }
  /* create a SelfSubjectRulesReview */
  async createAuthorizationV1SelfSubjectRulesReview(body) {
    const path = "/apis/authorization.k8s.io/v1/selfsubjectrulesreviews";
    return this.post(path);
  }
  /* create a SubjectAccessReview */
  async createAuthorizationV1SubjectAccessReview(body) {
    const path = "/apis/authorization.k8s.io/v1/subjectaccessreviews";
    return this.post(path);
  }
  /* get information of a group */
  async getAutoscalingAPIGroup() {
    const path = "/apis/autoscaling/";
    return this.get(path);
  }
  /* get available resources */
  async getAutoscalingV1APIResources() {
    const path = "/apis/autoscaling/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind HorizontalPodAutoscaler */
  async listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces() {
    const path = "/apis/autoscaling/v1/horizontalpodautoscalers";
    return this.get(path);
  }
  /* list or watch objects of kind HorizontalPodAutoscaler */
  async listAutoscalingV1NamespacedHorizontalPodAutoscaler(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  /* create a HorizontalPodAutoscaler */
  async createAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.post(path);
  }
  /* delete collection of HorizontalPodAutoscaler */
  async deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.delete(path);
  }
  /* read the specified HorizontalPodAutoscaler */
  async readAutoscalingV1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  /* replace the specified HorizontalPodAutoscaler */
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.put(path);
  }
  /* delete a HorizontalPodAutoscaler */
  async deleteAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.delete(path);
  }
  /* partially update the specified HorizontalPodAutoscaler */
  async patchAutoscalingV1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.patch(path);
  }
  /* read status of the specified HorizontalPodAutoscaler */
  async readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus() {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified HorizontalPodAutoscaler */
  async replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified HorizontalPodAutoscaler */
  async patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces() {
    const path = "/apis/autoscaling/v1/watch/horizontalpodautoscalers";
    return this.get(path);
  }
  /* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAutoscalingV1NamespacedHorizontalPodAutoscalerList() {
    const path = "/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  /* watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAutoscalingV1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getAutoscalingV2beta1APIResources() {
    const path = "/apis/autoscaling/v2beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind HorizontalPodAutoscaler */
  async listAutoscalingV2beta1HorizontalPodAutoscalerForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta1/horizontalpodautoscalers";
    return this.get(path);
  }
  /* list or watch objects of kind HorizontalPodAutoscaler */
  async listAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  /* create a HorizontalPodAutoscaler */
  async createAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.post(path);
  }
  /* delete collection of HorizontalPodAutoscaler */
  async deleteAutoscalingV2beta1CollectionNamespacedHorizontalPodAutoscaler(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers";
    return this.delete(path);
  }
  /* read the specified HorizontalPodAutoscaler */
  async readAutoscalingV2beta1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  /* replace the specified HorizontalPodAutoscaler */
  async replaceAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.put(path);
  }
  /* delete a HorizontalPodAutoscaler */
  async deleteAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.delete(path);
  }
  /* partially update the specified HorizontalPodAutoscaler */
  async patchAutoscalingV2beta1NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.patch(path);
  }
  /* read status of the specified HorizontalPodAutoscaler */
  async readAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus() {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified HorizontalPodAutoscaler */
  async replaceAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified HorizontalPodAutoscaler */
  async patchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAutoscalingV2beta1HorizontalPodAutoscalerListForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta1/watch/horizontalpodautoscalers";
    return this.get(path);
  }
  /* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAutoscalingV2beta1NamespacedHorizontalPodAutoscalerList() {
    const path = "/apis/autoscaling/v2beta1/watch/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  /* watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAutoscalingV2beta1NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getAutoscalingV2beta2APIResources() {
    const path = "/apis/autoscaling/v2beta2/";
    return this.get(path);
  }
  /* list or watch objects of kind HorizontalPodAutoscaler */
  async listAutoscalingV2beta2HorizontalPodAutoscalerForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta2/horizontalpodautoscalers";
    return this.get(path);
  }
  /* list or watch objects of kind HorizontalPodAutoscaler */
  async listAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  /* create a HorizontalPodAutoscaler */
  async createAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers";
    return this.post(path);
  }
  /* delete collection of HorizontalPodAutoscaler */
  async deleteAutoscalingV2beta2CollectionNamespacedHorizontalPodAutoscaler(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers";
    return this.delete(path);
  }
  /* read the specified HorizontalPodAutoscaler */
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  /* replace the specified HorizontalPodAutoscaler */
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.put(path);
  }
  /* delete a HorizontalPodAutoscaler */
  async deleteAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.delete(path);
  }
  /* partially update the specified HorizontalPodAutoscaler */
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.patch(path);
  }
  /* read status of the specified HorizontalPodAutoscaler */
  async readAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus() {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified HorizontalPodAutoscaler */
  async replaceAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified HorizontalPodAutoscaler */
  async patchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/autoscaling/v2beta2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAutoscalingV2beta2HorizontalPodAutoscalerListForAllNamespaces() {
    const path = "/apis/autoscaling/v2beta2/watch/horizontalpodautoscalers";
    return this.get(path);
  }
  /* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscalerList() {
    const path = "/apis/autoscaling/v2beta2/watch/namespaces/{namespace}/horizontalpodautoscalers";
    return this.get(path);
  }
  /* watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchAutoscalingV2beta2NamespacedHorizontalPodAutoscaler() {
    const path = "/apis/autoscaling/v2beta2/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getBatchAPIGroup() {
    const path = "/apis/batch/";
    return this.get(path);
  }
  /* get available resources */
  async getBatchV1APIResources() {
    const path = "/apis/batch/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind CronJob */
  async listBatchV1CronJobForAllNamespaces() {
    const path = "/apis/batch/v1/cronjobs";
    return this.get(path);
  }
  /* list or watch objects of kind Job */
  async listBatchV1JobForAllNamespaces() {
    const path = "/apis/batch/v1/jobs";
    return this.get(path);
  }
  /* list or watch objects of kind CronJob */
  async listBatchV1NamespacedCronJob(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  /* create a CronJob */
  async createBatchV1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs";
    return this.post(path);
  }
  /* delete collection of CronJob */
  async deleteBatchV1CollectionNamespacedCronJob(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs";
    return this.delete(path);
  }
  /* read the specified CronJob */
  async readBatchV1NamespacedCronJob() {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  /* replace the specified CronJob */
  async replaceBatchV1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.put(path);
  }
  /* delete a CronJob */
  async deleteBatchV1NamespacedCronJob(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.delete(path);
  }
  /* partially update the specified CronJob */
  async patchBatchV1NamespacedCronJob(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}";
    return this.patch(path);
  }
  /* read status of the specified CronJob */
  async readBatchV1NamespacedCronJobStatus() {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified CronJob */
  async replaceBatchV1NamespacedCronJobStatus(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified CronJob */
  async patchBatchV1NamespacedCronJobStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind Job */
  async listBatchV1NamespacedJob(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs";
    return this.get(path);
  }
  /* create a Job */
  async createBatchV1NamespacedJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs";
    return this.post(path);
  }
  /* delete collection of Job */
  async deleteBatchV1CollectionNamespacedJob(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs";
    return this.delete(path);
  }
  /* read the specified Job */
  async readBatchV1NamespacedJob() {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.get(path);
  }
  /* replace the specified Job */
  async replaceBatchV1NamespacedJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.put(path);
  }
  /* delete a Job */
  async deleteBatchV1NamespacedJob(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.delete(path);
  }
  /* partially update the specified Job */
  async patchBatchV1NamespacedJob(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}";
    return this.patch(path);
  }
  /* read status of the specified Job */
  async readBatchV1NamespacedJobStatus() {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Job */
  async replaceBatchV1NamespacedJobStatus(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Job */
  async patchBatchV1NamespacedJobStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchBatchV1CronJobListForAllNamespaces() {
    const path = "/apis/batch/v1/watch/cronjobs";
    return this.get(path);
  }
  /* watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchBatchV1JobListForAllNamespaces() {
    const path = "/apis/batch/v1/watch/jobs";
    return this.get(path);
  }
  /* watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchBatchV1NamespacedCronJobList() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  /* watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchBatchV1NamespacedCronJob() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchBatchV1NamespacedJobList() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/jobs";
    return this.get(path);
  }
  /* watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchBatchV1NamespacedJob() {
    const path = "/apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getBatchV1beta1APIResources() {
    const path = "/apis/batch/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind CronJob */
  async listBatchV1beta1CronJobForAllNamespaces() {
    const path = "/apis/batch/v1beta1/cronjobs";
    return this.get(path);
  }
  /* list or watch objects of kind CronJob */
  async listBatchV1beta1NamespacedCronJob(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  /* create a CronJob */
  async createBatchV1beta1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs";
    return this.post(path);
  }
  /* delete collection of CronJob */
  async deleteBatchV1beta1CollectionNamespacedCronJob(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs";
    return this.delete(path);
  }
  /* read the specified CronJob */
  async readBatchV1beta1NamespacedCronJob() {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  /* replace the specified CronJob */
  async replaceBatchV1beta1NamespacedCronJob(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.put(path);
  }
  /* delete a CronJob */
  async deleteBatchV1beta1NamespacedCronJob(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.delete(path);
  }
  /* partially update the specified CronJob */
  async patchBatchV1beta1NamespacedCronJob(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}";
    return this.patch(path);
  }
  /* read status of the specified CronJob */
  async readBatchV1beta1NamespacedCronJobStatus() {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified CronJob */
  async replaceBatchV1beta1NamespacedCronJobStatus(body, dryRun, fieldManager) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified CronJob */
  async patchBatchV1beta1NamespacedCronJobStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/batch/v1beta1/namespaces/{namespace}/cronjobs/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchBatchV1beta1CronJobListForAllNamespaces() {
    const path = "/apis/batch/v1beta1/watch/cronjobs";
    return this.get(path);
  }
  /* watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchBatchV1beta1NamespacedCronJobList() {
    const path = "/apis/batch/v1beta1/watch/namespaces/{namespace}/cronjobs";
    return this.get(path);
  }
  /* watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchBatchV1beta1NamespacedCronJob() {
    const path = "/apis/batch/v1beta1/watch/namespaces/{namespace}/cronjobs/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getCertificatesAPIGroup() {
    const path = "/apis/certificates.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getCertificatesV1APIResources() {
    const path = "/apis/certificates.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind CertificateSigningRequest */
  async listCertificatesV1CertificateSigningRequest(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests";
    return this.get(path);
  }
  /* create a CertificateSigningRequest */
  async createCertificatesV1CertificateSigningRequest(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests";
    return this.post(path);
  }
  /* delete collection of CertificateSigningRequest */
  async deleteCertificatesV1CollectionCertificateSigningRequest(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests";
    return this.delete(path);
  }
  /* read the specified CertificateSigningRequest */
  async readCertificatesV1CertificateSigningRequest() {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.get(path);
  }
  /* replace the specified CertificateSigningRequest */
  async replaceCertificatesV1CertificateSigningRequest(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.put(path);
  }
  /* delete a CertificateSigningRequest */
  async deleteCertificatesV1CertificateSigningRequest(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.delete(path);
  }
  /* partially update the specified CertificateSigningRequest */
  async patchCertificatesV1CertificateSigningRequest(body, dryRun, fieldManager, force) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}";
    return this.patch(path);
  }
  /* read approval of the specified CertificateSigningRequest */
  async readCertificatesV1CertificateSigningRequestApproval() {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval";
    return this.get(path);
  }
  /* replace approval of the specified CertificateSigningRequest */
  async replaceCertificatesV1CertificateSigningRequestApproval(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval";
    return this.put(path);
  }
  /* partially update approval of the specified CertificateSigningRequest */
  async patchCertificatesV1CertificateSigningRequestApproval(body, dryRun, fieldManager, force) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval";
    return this.patch(path);
  }
  /* read status of the specified CertificateSigningRequest */
  async readCertificatesV1CertificateSigningRequestStatus() {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified CertificateSigningRequest */
  async replaceCertificatesV1CertificateSigningRequestStatus(body, dryRun, fieldManager) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified CertificateSigningRequest */
  async patchCertificatesV1CertificateSigningRequestStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCertificatesV1CertificateSigningRequestList() {
    const path = "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests";
    return this.get(path);
  }
  /* watch changes to an object of kind CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCertificatesV1CertificateSigningRequest() {
    const path = "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getCoordinationAPIGroup() {
    const path = "/apis/coordination.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getCoordinationV1APIResources() {
    const path = "/apis/coordination.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind Lease */
  async listCoordinationV1LeaseForAllNamespaces() {
    const path = "/apis/coordination.k8s.io/v1/leases";
    return this.get(path);
  }
  /* list or watch objects of kind Lease */
  async listCoordinationV1NamespacedLease(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases";
    return this.get(path);
  }
  /* create a Lease */
  async createCoordinationV1NamespacedLease(body, dryRun, fieldManager) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases";
    return this.post(path);
  }
  /* delete collection of Lease */
  async deleteCoordinationV1CollectionNamespacedLease(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases";
    return this.delete(path);
  }
  /* read the specified Lease */
  async readCoordinationV1NamespacedLease() {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.get(path);
  }
  /* replace the specified Lease */
  async replaceCoordinationV1NamespacedLease(body, dryRun, fieldManager) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.put(path);
  }
  /* delete a Lease */
  async deleteCoordinationV1NamespacedLease(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.delete(path);
  }
  /* partially update the specified Lease */
  async patchCoordinationV1NamespacedLease(body, dryRun, fieldManager, force) {
    const path = "/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoordinationV1LeaseListForAllNamespaces() {
    const path = "/apis/coordination.k8s.io/v1/watch/leases";
    return this.get(path);
  }
  /* watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchCoordinationV1NamespacedLeaseList() {
    const path = "/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases";
    return this.get(path);
  }
  /* watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchCoordinationV1NamespacedLease() {
    const path = "/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getDiscoveryAPIGroup() {
    const path = "/apis/discovery.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getDiscoveryV1APIResources() {
    const path = "/apis/discovery.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind EndpointSlice */
  async listDiscoveryV1EndpointSliceForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1/endpointslices";
    return this.get(path);
  }
  /* list or watch objects of kind EndpointSlice */
  async listDiscoveryV1NamespacedEndpointSlice(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  /* create an EndpointSlice */
  async createDiscoveryV1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices";
    return this.post(path);
  }
  /* delete collection of EndpointSlice */
  async deleteDiscoveryV1CollectionNamespacedEndpointSlice(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices";
    return this.delete(path);
  }
  /* read the specified EndpointSlice */
  async readDiscoveryV1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  /* replace the specified EndpointSlice */
  async replaceDiscoveryV1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.put(path);
  }
  /* delete an EndpointSlice */
  async deleteDiscoveryV1NamespacedEndpointSlice(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.delete(path);
  }
  /* partially update the specified EndpointSlice */
  async patchDiscoveryV1NamespacedEndpointSlice(body, dryRun, fieldManager, force) {
    const path = "/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchDiscoveryV1EndpointSliceListForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1/watch/endpointslices";
    return this.get(path);
  }
  /* watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchDiscoveryV1NamespacedEndpointSliceList() {
    const path = "/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  /* watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchDiscoveryV1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getDiscoveryV1beta1APIResources() {
    const path = "/apis/discovery.k8s.io/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind EndpointSlice */
  async listDiscoveryV1beta1EndpointSliceForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1beta1/endpointslices";
    return this.get(path);
  }
  /* list or watch objects of kind EndpointSlice */
  async listDiscoveryV1beta1NamespacedEndpointSlice(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  /* create an EndpointSlice */
  async createDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices";
    return this.post(path);
  }
  /* delete collection of EndpointSlice */
  async deleteDiscoveryV1beta1CollectionNamespacedEndpointSlice(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices";
    return this.delete(path);
  }
  /* read the specified EndpointSlice */
  async readDiscoveryV1beta1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  /* replace the specified EndpointSlice */
  async replaceDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, fieldManager) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.put(path);
  }
  /* delete an EndpointSlice */
  async deleteDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.delete(path);
  }
  /* partially update the specified EndpointSlice */
  async patchDiscoveryV1beta1NamespacedEndpointSlice(body, dryRun, fieldManager, force) {
    const path = "/apis/discovery.k8s.io/v1beta1/namespaces/{namespace}/endpointslices/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchDiscoveryV1beta1EndpointSliceListForAllNamespaces() {
    const path = "/apis/discovery.k8s.io/v1beta1/watch/endpointslices";
    return this.get(path);
  }
  /* watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchDiscoveryV1beta1NamespacedEndpointSliceList() {
    const path = "/apis/discovery.k8s.io/v1beta1/watch/namespaces/{namespace}/endpointslices";
    return this.get(path);
  }
  /* watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchDiscoveryV1beta1NamespacedEndpointSlice() {
    const path = "/apis/discovery.k8s.io/v1beta1/watch/namespaces/{namespace}/endpointslices/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getEventsAPIGroup() {
    const path = "/apis/events.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getEventsV1APIResources() {
    const path = "/apis/events.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind Event */
  async listEventsV1EventForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1/events";
    return this.get(path);
  }
  /* list or watch objects of kind Event */
  async listEventsV1NamespacedEvent(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events";
    return this.get(path);
  }
  /* create an Event */
  async createEventsV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events";
    return this.post(path);
  }
  /* delete collection of Event */
  async deleteEventsV1CollectionNamespacedEvent(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events";
    return this.delete(path);
  }
  /* read the specified Event */
  async readEventsV1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  /* replace the specified Event */
  async replaceEventsV1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.put(path);
  }
  /* delete an Event */
  async deleteEventsV1NamespacedEvent(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.delete(path);
  }
  /* partially update the specified Event */
  async patchEventsV1NamespacedEvent(body, dryRun, fieldManager, force) {
    const path = "/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchEventsV1EventListForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1/watch/events";
    return this.get(path);
  }
  /* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchEventsV1NamespacedEventList() {
    const path = "/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events";
    return this.get(path);
  }
  /* watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchEventsV1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getEventsV1beta1APIResources() {
    const path = "/apis/events.k8s.io/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind Event */
  async listEventsV1beta1EventForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1beta1/events";
    return this.get(path);
  }
  /* list or watch objects of kind Event */
  async listEventsV1beta1NamespacedEvent(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events";
    return this.get(path);
  }
  /* create an Event */
  async createEventsV1beta1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events";
    return this.post(path);
  }
  /* delete collection of Event */
  async deleteEventsV1beta1CollectionNamespacedEvent(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events";
    return this.delete(path);
  }
  /* read the specified Event */
  async readEventsV1beta1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  /* replace the specified Event */
  async replaceEventsV1beta1NamespacedEvent(body, dryRun, fieldManager) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.put(path);
  }
  /* delete an Event */
  async deleteEventsV1beta1NamespacedEvent(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.delete(path);
  }
  /* partially update the specified Event */
  async patchEventsV1beta1NamespacedEvent(body, dryRun, fieldManager, force) {
    const path = "/apis/events.k8s.io/v1beta1/namespaces/{namespace}/events/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchEventsV1beta1EventListForAllNamespaces() {
    const path = "/apis/events.k8s.io/v1beta1/watch/events";
    return this.get(path);
  }
  /* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchEventsV1beta1NamespacedEventList() {
    const path = "/apis/events.k8s.io/v1beta1/watch/namespaces/{namespace}/events";
    return this.get(path);
  }
  /* watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchEventsV1beta1NamespacedEvent() {
    const path = "/apis/events.k8s.io/v1beta1/watch/namespaces/{namespace}/events/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getFlowcontrolApiserverAPIGroup() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getFlowcontrolApiserverV1beta1APIResources() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind FlowSchema */
  async listFlowcontrolApiserverV1beta1FlowSchema(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";
    return this.get(path);
  }
  /* create a FlowSchema */
  async createFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";
    return this.post(path);
  }
  /* delete collection of FlowSchema */
  async deleteFlowcontrolApiserverV1beta1CollectionFlowSchema(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas";
    return this.delete(path);
  }
  /* read the specified FlowSchema */
  async readFlowcontrolApiserverV1beta1FlowSchema() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.get(path);
  }
  /* replace the specified FlowSchema */
  async replaceFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.put(path);
  }
  /* delete a FlowSchema */
  async deleteFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.delete(path);
  }
  /* partially update the specified FlowSchema */
  async patchFlowcontrolApiserverV1beta1FlowSchema(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}";
    return this.patch(path);
  }
  /* read status of the specified FlowSchema */
  async readFlowcontrolApiserverV1beta1FlowSchemaStatus() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified FlowSchema */
  async replaceFlowcontrolApiserverV1beta1FlowSchemaStatus(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified FlowSchema */
  async patchFlowcontrolApiserverV1beta1FlowSchemaStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/flowschemas/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind PriorityLevelConfiguration */
  async listFlowcontrolApiserverV1beta1PriorityLevelConfiguration(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";
    return this.get(path);
  }
  /* create a PriorityLevelConfiguration */
  async createFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";
    return this.post(path);
  }
  /* delete collection of PriorityLevelConfiguration */
  async deleteFlowcontrolApiserverV1beta1CollectionPriorityLevelConfiguration(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations";
    return this.delete(path);
  }
  /* read the specified PriorityLevelConfiguration */
  async readFlowcontrolApiserverV1beta1PriorityLevelConfiguration() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.get(path);
  }
  /* replace the specified PriorityLevelConfiguration */
  async replaceFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.put(path);
  }
  /* delete a PriorityLevelConfiguration */
  async deleteFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.delete(path);
  }
  /* partially update the specified PriorityLevelConfiguration */
  async patchFlowcontrolApiserverV1beta1PriorityLevelConfiguration(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}";
    return this.patch(path);
  }
  /* read status of the specified PriorityLevelConfiguration */
  async readFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified PriorityLevelConfiguration */
  async replaceFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(body, dryRun, fieldManager) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified PriorityLevelConfiguration */
  async patchFlowcontrolApiserverV1beta1PriorityLevelConfigurationStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/prioritylevelconfigurations/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchFlowcontrolApiserverV1beta1FlowSchemaList() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas";
    return this.get(path);
  }
  /* watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchFlowcontrolApiserverV1beta1FlowSchema() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/flowschemas/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchFlowcontrolApiserverV1beta1PriorityLevelConfigurationList() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations";
    return this.get(path);
  }
  /* watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchFlowcontrolApiserverV1beta1PriorityLevelConfiguration() {
    const path = "/apis/flowcontrol.apiserver.k8s.io/v1beta1/watch/prioritylevelconfigurations/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getNetworkingAPIGroup() {
    const path = "/apis/networking.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getNetworkingV1APIResources() {
    const path = "/apis/networking.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind IngressClass */
  async listNetworkingV1IngressClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses";
    return this.get(path);
  }
  /* create an IngressClass */
  async createNetworkingV1IngressClass(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses";
    return this.post(path);
  }
  /* delete collection of IngressClass */
  async deleteNetworkingV1CollectionIngressClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses";
    return this.delete(path);
  }
  /* read the specified IngressClass */
  async readNetworkingV1IngressClass() {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.get(path);
  }
  /* replace the specified IngressClass */
  async replaceNetworkingV1IngressClass(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.put(path);
  }
  /* delete an IngressClass */
  async deleteNetworkingV1IngressClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.delete(path);
  }
  /* partially update the specified IngressClass */
  async patchNetworkingV1IngressClass(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/ingressclasses/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind Ingress */
  async listNetworkingV1IngressForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/ingresses";
    return this.get(path);
  }
  /* list or watch objects of kind Ingress */
  async listNetworkingV1NamespacedIngress(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses";
    return this.get(path);
  }
  /* create an Ingress */
  async createNetworkingV1NamespacedIngress(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses";
    return this.post(path);
  }
  /* delete collection of Ingress */
  async deleteNetworkingV1CollectionNamespacedIngress(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses";
    return this.delete(path);
  }
  /* read the specified Ingress */
  async readNetworkingV1NamespacedIngress() {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.get(path);
  }
  /* replace the specified Ingress */
  async replaceNetworkingV1NamespacedIngress(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.put(path);
  }
  /* delete an Ingress */
  async deleteNetworkingV1NamespacedIngress(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.delete(path);
  }
  /* partially update the specified Ingress */
  async patchNetworkingV1NamespacedIngress(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}";
    return this.patch(path);
  }
  /* read status of the specified Ingress */
  async readNetworkingV1NamespacedIngressStatus() {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified Ingress */
  async replaceNetworkingV1NamespacedIngressStatus(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified Ingress */
  async patchNetworkingV1NamespacedIngressStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind NetworkPolicy */
  async listNetworkingV1NamespacedNetworkPolicy(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies";
    return this.get(path);
  }
  /* create a NetworkPolicy */
  async createNetworkingV1NamespacedNetworkPolicy(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies";
    return this.post(path);
  }
  /* delete collection of NetworkPolicy */
  async deleteNetworkingV1CollectionNamespacedNetworkPolicy(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies";
    return this.delete(path);
  }
  /* read the specified NetworkPolicy */
  async readNetworkingV1NamespacedNetworkPolicy() {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.get(path);
  }
  /* replace the specified NetworkPolicy */
  async replaceNetworkingV1NamespacedNetworkPolicy(body, dryRun, fieldManager) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.put(path);
  }
  /* delete a NetworkPolicy */
  async deleteNetworkingV1NamespacedNetworkPolicy(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.delete(path);
  }
  /* partially update the specified NetworkPolicy */
  async patchNetworkingV1NamespacedNetworkPolicy(body, dryRun, fieldManager, force) {
    const path = "/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind NetworkPolicy */
  async listNetworkingV1NetworkPolicyForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/networkpolicies";
    return this.get(path);
  }
  /* watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNetworkingV1IngressClassList() {
    const path = "/apis/networking.k8s.io/v1/watch/ingressclasses";
    return this.get(path);
  }
  /* watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchNetworkingV1IngressClass() {
    const path = "/apis/networking.k8s.io/v1/watch/ingressclasses/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNetworkingV1IngressListForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/watch/ingresses";
    return this.get(path);
  }
  /* watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNetworkingV1NamespacedIngressList() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses";
    return this.get(path);
  }
  /* watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchNetworkingV1NamespacedIngress() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNetworkingV1NamespacedNetworkPolicyList() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies";
    return this.get(path);
  }
  /* watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchNetworkingV1NamespacedNetworkPolicy() {
    const path = "/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNetworkingV1NetworkPolicyListForAllNamespaces() {
    const path = "/apis/networking.k8s.io/v1/watch/networkpolicies";
    return this.get(path);
  }
  /* get information of a group */
  async getNodeAPIGroup() {
    const path = "/apis/node.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getNodeV1APIResources() {
    const path = "/apis/node.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind RuntimeClass */
  async listNodeV1RuntimeClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses";
    return this.get(path);
  }
  /* create a RuntimeClass */
  async createNodeV1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses";
    return this.post(path);
  }
  /* delete collection of RuntimeClass */
  async deleteNodeV1CollectionRuntimeClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses";
    return this.delete(path);
  }
  /* read the specified RuntimeClass */
  async readNodeV1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.get(path);
  }
  /* replace the specified RuntimeClass */
  async replaceNodeV1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.put(path);
  }
  /* delete a RuntimeClass */
  async deleteNodeV1RuntimeClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.delete(path);
  }
  /* partially update the specified RuntimeClass */
  async patchNodeV1RuntimeClass(body, dryRun, fieldManager, force) {
    const path = "/apis/node.k8s.io/v1/runtimeclasses/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNodeV1RuntimeClassList() {
    const path = "/apis/node.k8s.io/v1/watch/runtimeclasses";
    return this.get(path);
  }
  /* watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchNodeV1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1/watch/runtimeclasses/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getNodeV1beta1APIResources() {
    const path = "/apis/node.k8s.io/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind RuntimeClass */
  async listNodeV1beta1RuntimeClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses";
    return this.get(path);
  }
  /* create a RuntimeClass */
  async createNodeV1beta1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses";
    return this.post(path);
  }
  /* delete collection of RuntimeClass */
  async deleteNodeV1beta1CollectionRuntimeClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses";
    return this.delete(path);
  }
  /* read the specified RuntimeClass */
  async readNodeV1beta1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.get(path);
  }
  /* replace the specified RuntimeClass */
  async replaceNodeV1beta1RuntimeClass(body, dryRun, fieldManager) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.put(path);
  }
  /* delete a RuntimeClass */
  async deleteNodeV1beta1RuntimeClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.delete(path);
  }
  /* partially update the specified RuntimeClass */
  async patchNodeV1beta1RuntimeClass(body, dryRun, fieldManager, force) {
    const path = "/apis/node.k8s.io/v1beta1/runtimeclasses/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchNodeV1beta1RuntimeClassList() {
    const path = "/apis/node.k8s.io/v1beta1/watch/runtimeclasses";
    return this.get(path);
  }
  /* watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchNodeV1beta1RuntimeClass() {
    const path = "/apis/node.k8s.io/v1beta1/watch/runtimeclasses/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getPolicyAPIGroup() {
    const path = "/apis/policy/";
    return this.get(path);
  }
  /* get available resources */
  async getPolicyV1APIResources() {
    const path = "/apis/policy/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind PodDisruptionBudget */
  async listPolicyV1NamespacedPodDisruptionBudget(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  /* create a PodDisruptionBudget */
  async createPolicyV1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets";
    return this.post(path);
  }
  /* delete collection of PodDisruptionBudget */
  async deletePolicyV1CollectionNamespacedPodDisruptionBudget(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets";
    return this.delete(path);
  }
  /* read the specified PodDisruptionBudget */
  async readPolicyV1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  /* replace the specified PodDisruptionBudget */
  async replacePolicyV1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.put(path);
  }
  /* delete a PodDisruptionBudget */
  async deletePolicyV1NamespacedPodDisruptionBudget(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.delete(path);
  }
  /* partially update the specified PodDisruptionBudget */
  async patchPolicyV1NamespacedPodDisruptionBudget(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.patch(path);
  }
  /* read status of the specified PodDisruptionBudget */
  async readPolicyV1NamespacedPodDisruptionBudgetStatus() {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified PodDisruptionBudget */
  async replacePolicyV1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified PodDisruptionBudget */
  async patchPolicyV1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind PodDisruptionBudget */
  async listPolicyV1PodDisruptionBudgetForAllNamespaces() {
    const path = "/apis/policy/v1/poddisruptionbudgets";
    return this.get(path);
  }
  /* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchPolicyV1NamespacedPodDisruptionBudgetList() {
    const path = "/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  /* watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchPolicyV1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchPolicyV1PodDisruptionBudgetListForAllNamespaces() {
    const path = "/apis/policy/v1/watch/poddisruptionbudgets";
    return this.get(path);
  }
  /* get available resources */
  async getPolicyV1beta1APIResources() {
    const path = "/apis/policy/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind PodDisruptionBudget */
  async listPolicyV1beta1NamespacedPodDisruptionBudget(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  /* create a PodDisruptionBudget */
  async createPolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets";
    return this.post(path);
  }
  /* delete collection of PodDisruptionBudget */
  async deletePolicyV1beta1CollectionNamespacedPodDisruptionBudget(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets";
    return this.delete(path);
  }
  /* read the specified PodDisruptionBudget */
  async readPolicyV1beta1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  /* replace the specified PodDisruptionBudget */
  async replacePolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.put(path);
  }
  /* delete a PodDisruptionBudget */
  async deletePolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.delete(path);
  }
  /* partially update the specified PodDisruptionBudget */
  async patchPolicyV1beta1NamespacedPodDisruptionBudget(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.patch(path);
  }
  /* read status of the specified PodDisruptionBudget */
  async readPolicyV1beta1NamespacedPodDisruptionBudgetStatus() {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified PodDisruptionBudget */
  async replacePolicyV1beta1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified PodDisruptionBudget */
  async patchPolicyV1beta1NamespacedPodDisruptionBudgetStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1beta1/namespaces/{namespace}/poddisruptionbudgets/{name}/status";
    return this.patch(path);
  }
  /* list or watch objects of kind PodDisruptionBudget */
  async listPolicyV1beta1PodDisruptionBudgetForAllNamespaces() {
    const path = "/apis/policy/v1beta1/poddisruptionbudgets";
    return this.get(path);
  }
  /* list or watch objects of kind PodSecurityPolicy */
  async listPolicyV1beta1PodSecurityPolicy(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies";
    return this.get(path);
  }
  /* create a PodSecurityPolicy */
  async createPolicyV1beta1PodSecurityPolicy(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies";
    return this.post(path);
  }
  /* delete collection of PodSecurityPolicy */
  async deletePolicyV1beta1CollectionPodSecurityPolicy(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies";
    return this.delete(path);
  }
  /* read the specified PodSecurityPolicy */
  async readPolicyV1beta1PodSecurityPolicy() {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.get(path);
  }
  /* replace the specified PodSecurityPolicy */
  async replacePolicyV1beta1PodSecurityPolicy(body, dryRun, fieldManager) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.put(path);
  }
  /* delete a PodSecurityPolicy */
  async deletePolicyV1beta1PodSecurityPolicy(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.delete(path);
  }
  /* partially update the specified PodSecurityPolicy */
  async patchPolicyV1beta1PodSecurityPolicy(body, dryRun, fieldManager, force) {
    const path = "/apis/policy/v1beta1/podsecuritypolicies/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchPolicyV1beta1NamespacedPodDisruptionBudgetList() {
    const path = "/apis/policy/v1beta1/watch/namespaces/{namespace}/poddisruptionbudgets";
    return this.get(path);
  }
  /* watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchPolicyV1beta1NamespacedPodDisruptionBudget() {
    const path = "/apis/policy/v1beta1/watch/namespaces/{namespace}/poddisruptionbudgets/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchPolicyV1beta1PodDisruptionBudgetListForAllNamespaces() {
    const path = "/apis/policy/v1beta1/watch/poddisruptionbudgets";
    return this.get(path);
  }
  /* watch individual changes to a list of PodSecurityPolicy. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchPolicyV1beta1PodSecurityPolicyList() {
    const path = "/apis/policy/v1beta1/watch/podsecuritypolicies";
    return this.get(path);
  }
  /* watch changes to an object of kind PodSecurityPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchPolicyV1beta1PodSecurityPolicy() {
    const path = "/apis/policy/v1beta1/watch/podsecuritypolicies/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getRbacAuthorizationAPIGroup() {
    const path = "/apis/rbac.authorization.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getRbacAuthorizationV1APIResources() {
    const path = "/apis/rbac.authorization.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind ClusterRoleBinding */
  async listRbacAuthorizationV1ClusterRoleBinding(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings";
    return this.get(path);
  }
  /* create a ClusterRoleBinding */
  async createRbacAuthorizationV1ClusterRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings";
    return this.post(path);
  }
  /* delete collection of ClusterRoleBinding */
  async deleteRbacAuthorizationV1CollectionClusterRoleBinding(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings";
    return this.delete(path);
  }
  /* read the specified ClusterRoleBinding */
  async readRbacAuthorizationV1ClusterRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.get(path);
  }
  /* replace the specified ClusterRoleBinding */
  async replaceRbacAuthorizationV1ClusterRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.put(path);
  }
  /* delete a ClusterRoleBinding */
  async deleteRbacAuthorizationV1ClusterRoleBinding(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.delete(path);
  }
  /* partially update the specified ClusterRoleBinding */
  async patchRbacAuthorizationV1ClusterRoleBinding(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind ClusterRole */
  async listRbacAuthorizationV1ClusterRole(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles";
    return this.get(path);
  }
  /* create a ClusterRole */
  async createRbacAuthorizationV1ClusterRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles";
    return this.post(path);
  }
  /* delete collection of ClusterRole */
  async deleteRbacAuthorizationV1CollectionClusterRole(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles";
    return this.delete(path);
  }
  /* read the specified ClusterRole */
  async readRbacAuthorizationV1ClusterRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.get(path);
  }
  /* replace the specified ClusterRole */
  async replaceRbacAuthorizationV1ClusterRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.put(path);
  }
  /* delete a ClusterRole */
  async deleteRbacAuthorizationV1ClusterRole(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.delete(path);
  }
  /* partially update the specified ClusterRole */
  async patchRbacAuthorizationV1ClusterRole(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind RoleBinding */
  async listRbacAuthorizationV1NamespacedRoleBinding(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings";
    return this.get(path);
  }
  /* create a RoleBinding */
  async createRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings";
    return this.post(path);
  }
  /* delete collection of RoleBinding */
  async deleteRbacAuthorizationV1CollectionNamespacedRoleBinding(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings";
    return this.delete(path);
  }
  /* read the specified RoleBinding */
  async readRbacAuthorizationV1NamespacedRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.get(path);
  }
  /* replace the specified RoleBinding */
  async replaceRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.put(path);
  }
  /* delete a RoleBinding */
  async deleteRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.delete(path);
  }
  /* partially update the specified RoleBinding */
  async patchRbacAuthorizationV1NamespacedRoleBinding(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind Role */
  async listRbacAuthorizationV1NamespacedRole(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles";
    return this.get(path);
  }
  /* create a Role */
  async createRbacAuthorizationV1NamespacedRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles";
    return this.post(path);
  }
  /* delete collection of Role */
  async deleteRbacAuthorizationV1CollectionNamespacedRole(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles";
    return this.delete(path);
  }
  /* read the specified Role */
  async readRbacAuthorizationV1NamespacedRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.get(path);
  }
  /* replace the specified Role */
  async replaceRbacAuthorizationV1NamespacedRole(body, dryRun, fieldManager) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.put(path);
  }
  /* delete a Role */
  async deleteRbacAuthorizationV1NamespacedRole(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.delete(path);
  }
  /* partially update the specified Role */
  async patchRbacAuthorizationV1NamespacedRole(body, dryRun, fieldManager, force) {
    const path = "/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind RoleBinding */
  async listRbacAuthorizationV1RoleBindingForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/rolebindings";
    return this.get(path);
  }
  /* list or watch objects of kind Role */
  async listRbacAuthorizationV1RoleForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/roles";
    return this.get(path);
  }
  /* watch individual changes to a list of ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchRbacAuthorizationV1ClusterRoleBindingList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings";
    return this.get(path);
  }
  /* watch changes to an object of kind ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchRbacAuthorizationV1ClusterRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of ClusterRole. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchRbacAuthorizationV1ClusterRoleList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterroles";
    return this.get(path);
  }
  /* watch changes to an object of kind ClusterRole. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchRbacAuthorizationV1ClusterRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchRbacAuthorizationV1NamespacedRoleBindingList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings";
    return this.get(path);
  }
  /* watch changes to an object of kind RoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchRbacAuthorizationV1NamespacedRoleBinding() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of Role. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchRbacAuthorizationV1NamespacedRoleList() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles";
    return this.get(path);
  }
  /* watch changes to an object of kind Role. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchRbacAuthorizationV1NamespacedRole() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchRbacAuthorizationV1RoleBindingListForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/rolebindings";
    return this.get(path);
  }
  /* watch individual changes to a list of Role. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchRbacAuthorizationV1RoleListForAllNamespaces() {
    const path = "/apis/rbac.authorization.k8s.io/v1/watch/roles";
    return this.get(path);
  }
  /* get information of a group */
  async getSchedulingAPIGroup() {
    const path = "/apis/scheduling.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getSchedulingV1APIResources() {
    const path = "/apis/scheduling.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind PriorityClass */
  async listSchedulingV1PriorityClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses";
    return this.get(path);
  }
  /* create a PriorityClass */
  async createSchedulingV1PriorityClass(body, dryRun, fieldManager) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses";
    return this.post(path);
  }
  /* delete collection of PriorityClass */
  async deleteSchedulingV1CollectionPriorityClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses";
    return this.delete(path);
  }
  /* read the specified PriorityClass */
  async readSchedulingV1PriorityClass() {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.get(path);
  }
  /* replace the specified PriorityClass */
  async replaceSchedulingV1PriorityClass(body, dryRun, fieldManager) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.put(path);
  }
  /* delete a PriorityClass */
  async deleteSchedulingV1PriorityClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.delete(path);
  }
  /* partially update the specified PriorityClass */
  async patchSchedulingV1PriorityClass(body, dryRun, fieldManager, force) {
    const path = "/apis/scheduling.k8s.io/v1/priorityclasses/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of PriorityClass. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchSchedulingV1PriorityClassList() {
    const path = "/apis/scheduling.k8s.io/v1/watch/priorityclasses";
    return this.get(path);
  }
  /* watch changes to an object of kind PriorityClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchSchedulingV1PriorityClass() {
    const path = "/apis/scheduling.k8s.io/v1/watch/priorityclasses/{name}";
    return this.get(path);
  }
  /* get information of a group */
  async getStorageAPIGroup() {
    const path = "/apis/storage.k8s.io/";
    return this.get(path);
  }
  /* get available resources */
  async getStorageV1APIResources() {
    const path = "/apis/storage.k8s.io/v1/";
    return this.get(path);
  }
  /* list or watch objects of kind CSIDriver */
  async listStorageV1CSIDriver(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/csidrivers";
    return this.get(path);
  }
  /* create a CSIDriver */
  async createStorageV1CSIDriver(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csidrivers";
    return this.post(path);
  }
  /* delete collection of CSIDriver */
  async deleteStorageV1CollectionCSIDriver(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/csidrivers";
    return this.delete(path);
  }
  /* read the specified CSIDriver */
  async readStorageV1CSIDriver() {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.get(path);
  }
  /* replace the specified CSIDriver */
  async replaceStorageV1CSIDriver(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.put(path);
  }
  /* delete a CSIDriver */
  async deleteStorageV1CSIDriver(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.delete(path);
  }
  /* partially update the specified CSIDriver */
  async patchStorageV1CSIDriver(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/csidrivers/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind CSINode */
  async listStorageV1CSINode(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/csinodes";
    return this.get(path);
  }
  /* create a CSINode */
  async createStorageV1CSINode(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csinodes";
    return this.post(path);
  }
  /* delete collection of CSINode */
  async deleteStorageV1CollectionCSINode(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/csinodes";
    return this.delete(path);
  }
  /* read the specified CSINode */
  async readStorageV1CSINode() {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.get(path);
  }
  /* replace the specified CSINode */
  async replaceStorageV1CSINode(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.put(path);
  }
  /* delete a CSINode */
  async deleteStorageV1CSINode(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.delete(path);
  }
  /* partially update the specified CSINode */
  async patchStorageV1CSINode(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/csinodes/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind StorageClass */
  async listStorageV1StorageClass(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/storageclasses";
    return this.get(path);
  }
  /* create a StorageClass */
  async createStorageV1StorageClass(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/storageclasses";
    return this.post(path);
  }
  /* delete collection of StorageClass */
  async deleteStorageV1CollectionStorageClass(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/storageclasses";
    return this.delete(path);
  }
  /* read the specified StorageClass */
  async readStorageV1StorageClass() {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.get(path);
  }
  /* replace the specified StorageClass */
  async replaceStorageV1StorageClass(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.put(path);
  }
  /* delete a StorageClass */
  async deleteStorageV1StorageClass(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.delete(path);
  }
  /* partially update the specified StorageClass */
  async patchStorageV1StorageClass(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/storageclasses/{name}";
    return this.patch(path);
  }
  /* list or watch objects of kind VolumeAttachment */
  async listStorageV1VolumeAttachment(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments";
    return this.get(path);
  }
  /* create a VolumeAttachment */
  async createStorageV1VolumeAttachment(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments";
    return this.post(path);
  }
  /* delete collection of VolumeAttachment */
  async deleteStorageV1CollectionVolumeAttachment(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments";
    return this.delete(path);
  }
  /* read the specified VolumeAttachment */
  async readStorageV1VolumeAttachment() {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.get(path);
  }
  /* replace the specified VolumeAttachment */
  async replaceStorageV1VolumeAttachment(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.put(path);
  }
  /* delete a VolumeAttachment */
  async deleteStorageV1VolumeAttachment(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.delete(path);
  }
  /* partially update the specified VolumeAttachment */
  async patchStorageV1VolumeAttachment(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}";
    return this.patch(path);
  }
  /* read status of the specified VolumeAttachment */
  async readStorageV1VolumeAttachmentStatus() {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}/status";
    return this.get(path);
  }
  /* replace status of the specified VolumeAttachment */
  async replaceStorageV1VolumeAttachmentStatus(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}/status";
    return this.put(path);
  }
  /* partially update status of the specified VolumeAttachment */
  async patchStorageV1VolumeAttachmentStatus(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1/volumeattachments/{name}/status";
    return this.patch(path);
  }
  /* watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchStorageV1CSIDriverList() {
    const path = "/apis/storage.k8s.io/v1/watch/csidrivers";
    return this.get(path);
  }
  /* watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchStorageV1CSIDriver() {
    const path = "/apis/storage.k8s.io/v1/watch/csidrivers/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchStorageV1CSINodeList() {
    const path = "/apis/storage.k8s.io/v1/watch/csinodes";
    return this.get(path);
  }
  /* watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchStorageV1CSINode() {
    const path = "/apis/storage.k8s.io/v1/watch/csinodes/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchStorageV1StorageClassList() {
    const path = "/apis/storage.k8s.io/v1/watch/storageclasses";
    return this.get(path);
  }
  /* watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchStorageV1StorageClass() {
    const path = "/apis/storage.k8s.io/v1/watch/storageclasses/{name}";
    return this.get(path);
  }
  /* watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchStorageV1VolumeAttachmentList() {
    const path = "/apis/storage.k8s.io/v1/watch/volumeattachments";
    return this.get(path);
  }
  /* watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchStorageV1VolumeAttachment() {
    const path = "/apis/storage.k8s.io/v1/watch/volumeattachments/{name}";
    return this.get(path);
  }
  /* get available resources */
  async getStorageV1beta1APIResources() {
    const path = "/apis/storage.k8s.io/v1beta1/";
    return this.get(path);
  }
  /* list or watch objects of kind CSIStorageCapacity */
  async listStorageV1beta1CSIStorageCapacityForAllNamespaces() {
    const path = "/apis/storage.k8s.io/v1beta1/csistoragecapacities";
    return this.get(path);
  }
  /* list or watch objects of kind CSIStorageCapacity */
  async listStorageV1beta1NamespacedCSIStorageCapacity(allowWatchBookmarks, continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, timeoutSeconds, watch) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities";
    return this.get(path);
  }
  /* create a CSIStorageCapacity */
  async createStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities";
    return this.post(path);
  }
  /* delete collection of CSIStorageCapacity */
  async deleteStorageV1beta1CollectionNamespacedCSIStorageCapacity(body, continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, timeoutSeconds) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities";
    return this.delete(path);
  }
  /* read the specified CSIStorageCapacity */
  async readStorageV1beta1NamespacedCSIStorageCapacity() {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.get(path);
  }
  /* replace the specified CSIStorageCapacity */
  async replaceStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, fieldManager) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.put(path);
  }
  /* delete a CSIStorageCapacity */
  async deleteStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.delete(path);
  }
  /* partially update the specified CSIStorageCapacity */
  async patchStorageV1beta1NamespacedCSIStorageCapacity(body, dryRun, fieldManager, force) {
    const path = "/apis/storage.k8s.io/v1beta1/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.patch(path);
  }
  /* watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchStorageV1beta1CSIStorageCapacityListForAllNamespaces() {
    const path = "/apis/storage.k8s.io/v1beta1/watch/csistoragecapacities";
    return this.get(path);
  }
  /* watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead. */
  async watchStorageV1beta1NamespacedCSIStorageCapacityList() {
    const path = "/apis/storage.k8s.io/v1beta1/watch/namespaces/{namespace}/csistoragecapacities";
    return this.get(path);
  }
  /* watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter. */
  async watchStorageV1beta1NamespacedCSIStorageCapacity() {
    const path = "/apis/storage.k8s.io/v1beta1/watch/namespaces/{namespace}/csistoragecapacities/{name}";
    return this.get(path);
  }
  async logFileListHandler() {
    const path = "/logs/";
    return this.get(path);
  }
  async logFileHandler() {
    const path = "/logs/{logpath}";
    return this.get(path);
  }
  /* get service account issuer OpenID JSON Web Key Set (contains public token verification keys) */
  async getServiceAccountIssuerOpenIDKeyset() {
    const path = "/openid/v1/jwks/";
    return this.get(path);
  }
  /* get the code version */
  async getCodeVersion() {
    const path = "/version/";
    return this.get(path);
  }
}