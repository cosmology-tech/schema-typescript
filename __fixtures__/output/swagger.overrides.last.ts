/* io.k8s.api.admissionregistration.v1.MutatingWebhook */
/* MutatingWebhook describes an admission webhook and the resources and operations it applies to. */
export interface MutatingWebhook {
  admissionReviewVersions: string[];
  clientConfig: WebhookClientConfig;
  failurePolicy?: string;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: LabelSelector;
  objectSelector?: LabelSelector;
  reinvocationPolicy?: string;
  rules?: RuleWithOperations[];
  sideEffects: string;
  timeoutSeconds?: number;
}
/* io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration */
/* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object. */
export interface MutatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  webhooks?: MutatingWebhook[];
}
/* io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList */
/* MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration. */
export interface MutatingWebhookConfigurationList {
  apiVersion?: string;
  items: MutatingWebhookConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.admissionregistration.v1.RuleWithOperations */
/* RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid. */
export interface RuleWithOperations {
  apiGroups?: string[];
  apiVersions?: string[];
  operations?: string[];
  resources?: string[];
  scope?: string;
}
/* io.k8s.api.admissionregistration.v1.ServiceReference */
/* ServiceReference holds a reference to Service.legacy.k8s.io */
export interface ServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
/* io.k8s.api.admissionregistration.v1.ValidatingWebhook */
/* ValidatingWebhook describes an admission webhook and the resources and operations it applies to. */
export interface ValidatingWebhook {
  admissionReviewVersions: string[];
  clientConfig: WebhookClientConfig;
  failurePolicy?: string;
  matchPolicy?: string;
  name: string;
  namespaceSelector?: LabelSelector;
  objectSelector?: LabelSelector;
  rules?: RuleWithOperations[];
  sideEffects: string;
  timeoutSeconds?: number;
}
/* io.k8s.api.admissionregistration.v1.ValidatingWebhookConfiguration */
/* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. */
export interface ValidatingWebhookConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  webhooks?: ValidatingWebhook[];
}
/* io.k8s.api.admissionregistration.v1.ValidatingWebhookConfigurationList */
/* ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration. */
export interface ValidatingWebhookConfigurationList {
  apiVersion?: string;
  items: ValidatingWebhookConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.admissionregistration.v1.WebhookClientConfig */
/* WebhookClientConfig contains the information to make a TLS connection with the webhook */
export interface WebhookClientConfig {
  caBundle?: string;
  service?: ServiceReference;
  url?: string;
}
/* io.k8s.api.apps.v1.ControllerRevision */
/* ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers. */
export interface ControllerRevision {
  apiVersion?: string;
  data?: RawExtension;
  kind?: string;
  metadata?: ObjectMeta;
  revision: number;
}
/* io.k8s.api.apps.v1.ControllerRevisionList */
/* ControllerRevisionList is a resource containing a list of ControllerRevision objects. */
export interface ControllerRevisionList {
  apiVersion?: string;
  items: ControllerRevision[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.DaemonSet */
/* DaemonSet represents the configuration of a daemon set. */
export interface DaemonSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DaemonSetSpec;
  status?: DaemonSetStatus;
}
/* io.k8s.api.apps.v1.DaemonSetCondition */
/* DaemonSetCondition describes the state of a DaemonSet at a certain point. */
export interface DaemonSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.DaemonSetList */
/* DaemonSetList is a collection of daemon sets. */
export interface DaemonSetList {
  apiVersion?: string;
  items: DaemonSet[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.DaemonSetSpec */
/* DaemonSetSpec is the specification of a daemon set. */
export interface DaemonSetSpec {
  minReadySeconds?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  template: PodTemplateSpec;
  updateStrategy?: DaemonSetUpdateStrategy;
}
/* io.k8s.api.apps.v1.DaemonSetStatus */
/* DaemonSetStatus represents the current status of a daemon set. */
export interface DaemonSetStatus {
  collisionCount?: number;
  conditions?: DaemonSetCondition[];
  currentNumberScheduled: number;
  desiredNumberScheduled: number;
  numberAvailable?: number;
  numberMisscheduled: number;
  numberReady: number;
  numberUnavailable?: number;
  observedGeneration?: number;
  updatedNumberScheduled?: number;
}
/* io.k8s.api.apps.v1.DaemonSetUpdateStrategy */
/* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet. */
export interface DaemonSetUpdateStrategy {
  rollingUpdate?: RollingUpdateDaemonSet;
  type?: string;
}
/* io.k8s.api.apps.v1.Deployment */
/* Deployment enables declarative updates for Pods and ReplicaSets. */
export interface Deployment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: DeploymentSpec;
  status?: DeploymentStatus;
}
/* io.k8s.api.apps.v1.DeploymentCondition */
/* DeploymentCondition describes the state of a deployment at a certain point. */
export interface DeploymentCondition {
  lastTransitionTime?: Time;
  lastUpdateTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.DeploymentList */
/* DeploymentList is a list of Deployments. */
export interface DeploymentList {
  apiVersion?: string;
  items: Deployment[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.DeploymentSpec */
/* DeploymentSpec is the specification of the desired behavior of the Deployment. */
export interface DeploymentSpec {
  minReadySeconds?: number;
  paused?: boolean;
  progressDeadlineSeconds?: number;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  strategy?: DeploymentStrategy;
  template: PodTemplateSpec;
}
/* io.k8s.api.apps.v1.DeploymentStatus */
/* DeploymentStatus is the most recently observed status of the Deployment. */
export interface DeploymentStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: DeploymentCondition[];
  observedGeneration?: number;
  readyReplicas?: number;
  replicas?: number;
  unavailableReplicas?: number;
  updatedReplicas?: number;
}
/* io.k8s.api.apps.v1.DeploymentStrategy */
/* DeploymentStrategy describes how to replace existing pods with new ones. */
export interface DeploymentStrategy {
  rollingUpdate?: RollingUpdateDeployment;
  type?: string;
}
/* io.k8s.api.apps.v1.ReplicaSet */
/* ReplicaSet ensures that a specified number of pod replicas are running at any given time. */
export interface ReplicaSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ReplicaSetSpec;
  status?: ReplicaSetStatus;
}
/* io.k8s.api.apps.v1.ReplicaSetCondition */
/* ReplicaSetCondition describes the state of a replica set at a certain point. */
export interface ReplicaSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.ReplicaSetList */
/* ReplicaSetList is a collection of ReplicaSets. */
export interface ReplicaSetList {
  apiVersion?: string;
  items: ReplicaSet[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.ReplicaSetSpec */
/* ReplicaSetSpec is the specification of a ReplicaSet. */
export interface ReplicaSetSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector: LabelSelector;
  template?: PodTemplateSpec;
}
/* io.k8s.api.apps.v1.ReplicaSetStatus */
/* ReplicaSetStatus represents the current status of a ReplicaSet. */
export interface ReplicaSetStatus {
  availableReplicas?: number;
  conditions?: ReplicaSetCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
/* io.k8s.api.apps.v1.RollingUpdateDaemonSet */
/* Spec to control the desired behavior of daemon set rolling update. */
export interface RollingUpdateDaemonSet {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
/* io.k8s.api.apps.v1.RollingUpdateDeployment */
/* Spec to control the desired behavior of rolling update. */
export interface RollingUpdateDeployment {
  maxSurge?: IntOrString;
  maxUnavailable?: IntOrString;
}
/* io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy */
/* RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType. */
export interface RollingUpdateStatefulSetStrategy {
  partition?: number;
}
/* io.k8s.api.apps.v1.StatefulSet */
/* StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity. */
export interface StatefulSet {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: StatefulSetSpec;
  status?: StatefulSetStatus;
}
/* io.k8s.api.apps.v1.StatefulSetCondition */
/* StatefulSetCondition describes the state of a statefulset at a certain point. */
export interface StatefulSetCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.apps.v1.StatefulSetList */
/* StatefulSetList is a collection of StatefulSets. */
export interface StatefulSetList {
  apiVersion?: string;
  items: StatefulSet[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.apps.v1.StatefulSetSpec */
/* A StatefulSetSpec is the specification of a StatefulSet. */
export interface StatefulSetSpec {
  minReadySeconds?: number;
  podManagementPolicy?: string;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: LabelSelector;
  serviceName: string;
  template: PodTemplateSpec;
  updateStrategy?: StatefulSetUpdateStrategy;
  volumeClaimTemplates?: PersistentVolumeClaim[];
}
/* io.k8s.api.apps.v1.StatefulSetStatus */
/* StatefulSetStatus represents the current state of a StatefulSet. */
export interface StatefulSetStatus {
  availableReplicas?: number;
  collisionCount?: number;
  conditions?: StatefulSetCondition[];
  currentReplicas?: number;
  currentRevision?: string;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
  updateRevision?: string;
  updatedReplicas?: number;
}
/* io.k8s.api.apps.v1.StatefulSetUpdateStrategy */
/* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy. */
export interface StatefulSetUpdateStrategy {
  rollingUpdate?: RollingUpdateStatefulSetStrategy;
  type?: string;
}
/* io.k8s.api.authentication.v1.BoundObjectReference */
/* BoundObjectReference is a reference to an object that a token is bound to. */
export interface BoundObjectReference {
  apiVersion?: string;
  kind?: string;
  name?: string;
  uid?: string;
}
/* io.k8s.api.authentication.v1.TokenRequest */
/* TokenRequest requests a token for a given service account. */
export interface TokenRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: TokenRequestSpec;
  status?: TokenRequestStatus;
}
/* io.k8s.api.authentication.v1.TokenRequestSpec */
/* TokenRequestSpec contains client provided parameters of a token request. */
export interface TokenRequestSpec {
  audiences: string[];
  boundObjectRef?: BoundObjectReference;
  expirationSeconds?: number;
}
/* io.k8s.api.authentication.v1.TokenRequestStatus */
/* TokenRequestStatus is the result of a token request. */
export interface TokenRequestStatus {
  expirationTimestamp: Time;
  token: string;
}
/* io.k8s.api.authentication.v1.TokenReview */
/* TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver. */
export interface TokenReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: TokenReviewSpec;
  status?: TokenReviewStatus;
}
/* io.k8s.api.authentication.v1.TokenReviewSpec */
/* TokenReviewSpec is a description of the token authentication request. */
export interface TokenReviewSpec {
  audiences?: string[];
  token?: string;
}
/* io.k8s.api.authentication.v1.TokenReviewStatus */
/* TokenReviewStatus is the result of the token authentication request. */
export interface TokenReviewStatus {
  audiences?: string[];
  authenticated?: boolean;
  error?: string;
  user?: UserInfo;
}
/* io.k8s.api.authentication.v1.UserInfo */
/* UserInfo holds the information about the user needed to implement the user.Info interface. */
export interface UserInfo {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  uid?: string;
  username?: string;
}
/* io.k8s.api.authorization.v1.LocalSubjectAccessReview */
/* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking. */
export interface LocalSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
/* io.k8s.api.authorization.v1.NonResourceAttributes */
/* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface */
export interface NonResourceAttributes {
  path?: string;
  verb?: string;
}
/* io.k8s.api.authorization.v1.NonResourceRule */
/* NonResourceRule holds information that describes a rule for the non-resource */
export interface NonResourceRule {
  nonResourceURLs?: string[];
  verbs: string[];
}
/* io.k8s.api.authorization.v1.ResourceAttributes */
/* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface */
export interface ResourceAttributes {
  group?: string;
  name?: string;
  namespace?: string;
  resource?: string;
  subresource?: string;
  verb?: string;
  version?: string;
}
/* io.k8s.api.authorization.v1.ResourceRule */
/* ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete. */
export interface ResourceRule {
  apiGroups?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
/* io.k8s.api.authorization.v1.SelfSubjectAccessReview */
/* SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action */
export interface SelfSubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SelfSubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
/* io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec */
/* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export interface SelfSubjectAccessReviewSpec {
  nonResourceAttributes?: NonResourceAttributes;
  resourceAttributes?: ResourceAttributes;
}
/* io.k8s.api.authorization.v1.SelfSubjectRulesReview */
/* SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server. */
export interface SelfSubjectRulesReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SelfSubjectRulesReviewSpec;
  status?: SubjectRulesReviewStatus;
}
/* io.k8s.api.authorization.v1.SelfSubjectRulesReviewSpec */
/* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview. */
export interface SelfSubjectRulesReviewSpec {
  namespace?: string;
}
/* io.k8s.api.authorization.v1.SubjectAccessReview */
/* SubjectAccessReview checks whether or not a user or group can perform an action. */
export interface SubjectAccessReview {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: SubjectAccessReviewSpec;
  status?: SubjectAccessReviewStatus;
}
/* io.k8s.api.authorization.v1.SubjectAccessReviewSpec */
/* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set */
export interface SubjectAccessReviewSpec {
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  nonResourceAttributes?: NonResourceAttributes;
  resourceAttributes?: ResourceAttributes;
  uid?: string;
  user?: string;
}
/* io.k8s.api.authorization.v1.SubjectAccessReviewStatus */
/* SubjectAccessReviewStatus */
export interface SubjectAccessReviewStatus {
  allowed: boolean;
  denied?: boolean;
  evaluationError?: string;
  reason?: string;
}
/* io.k8s.api.authorization.v1.SubjectRulesReviewStatus */
/* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete. */
export interface SubjectRulesReviewStatus {
  evaluationError?: string;
  incomplete: boolean;
  nonResourceRules: NonResourceRule[];
  resourceRules: ResourceRule[];
}
/* io.k8s.api.autoscaling.v1.CrossVersionObjectReference */
/* CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler */
/* configuration of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList */
/* list of horizontal pod autoscaler objects. */
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec */
/* specification of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
  targetCPUUtilizationPercentage?: number;
}
/* io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus */
/* current status of a horizontal pod autoscaler */
export interface HorizontalPodAutoscalerStatus {
  currentCPUUtilizationPercentage?: number;
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
/* io.k8s.api.autoscaling.v1.Scale */
/* Scale represents a scaling request for a resource. */
export interface Scale {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ScaleSpec;
  status?: ScaleStatus;
}
/* io.k8s.api.autoscaling.v1.ScaleSpec */
/* ScaleSpec describes the attributes of a scale subresource. */
export interface ScaleSpec {
  replicas?: number;
}
/* io.k8s.api.autoscaling.v1.ScaleStatus */
/* ScaleStatus represents the current status of a scale subresource. */
export interface ScaleStatus {
  replicas: number;
  selector?: string;
}
/* io.k8s.api.autoscaling.v2beta1.ContainerResourceMetricSource */
/* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export interface ContainerResourceMetricSource {
  container: string;
  name: string;
  targetAverageUtilization?: number;
  targetAverageValue?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta1.ContainerResourceMetricStatus */
/* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export interface ContainerResourceMetricStatus {
  container: string;
  currentAverageUtilization?: number;
  currentAverageValue: Quantity;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta1.CrossVersionObjectReference */
/* CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta1.ExternalMetricSource */
/* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set. */
export interface ExternalMetricSource {
  metricName: string;
  metricSelector?: LabelSelector;
  targetAverageValue?: Quantity;
  targetValue?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta1.ExternalMetricStatus */
/* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export interface ExternalMetricStatus {
  currentAverageValue?: Quantity;
  currentValue: Quantity;
  metricName: string;
  metricSelector?: LabelSelector;
}
/* io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler */
/* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
/* io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerCondition */
/* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export interface HorizontalPodAutoscalerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList */
/* HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects. */
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerSpec */
/* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export interface HorizontalPodAutoscalerSpec {
  maxReplicas: number;
  metrics?: MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
}
/* io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerStatus */
/* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscalerStatus {
  conditions: HorizontalPodAutoscalerCondition[];
  currentMetrics?: MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
/* io.k8s.api.autoscaling.v2beta1.MetricSpec */
/* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export interface MetricSpec {
  containerResource?: ContainerResourceMetricSource;
  external?: ExternalMetricSource;
  object?: ObjectMetricSource;
  pods?: PodsMetricSource;
  resource?: ResourceMetricSource;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta1.MetricStatus */
/* MetricStatus describes the last-read state of a single metric. */
export interface MetricStatus {
  containerResource?: ContainerResourceMetricStatus;
  external?: ExternalMetricStatus;
  object?: ObjectMetricStatus;
  pods?: PodsMetricStatus;
  resource?: ResourceMetricStatus;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta1.ObjectMetricSource */
/* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface ObjectMetricSource {
  averageValue?: Quantity;
  metricName: string;
  selector?: LabelSelector;
  target: CrossVersionObjectReference;
  targetValue: Quantity;
}
/* io.k8s.api.autoscaling.v2beta1.ObjectMetricStatus */
/* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface ObjectMetricStatus {
  averageValue?: Quantity;
  currentValue: Quantity;
  metricName: string;
  selector?: LabelSelector;
  target: CrossVersionObjectReference;
}
/* io.k8s.api.autoscaling.v2beta1.PodsMetricSource */
/* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export interface PodsMetricSource {
  metricName: string;
  selector?: LabelSelector;
  targetAverageValue: Quantity;
}
/* io.k8s.api.autoscaling.v2beta1.PodsMetricStatus */
/* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export interface PodsMetricStatus {
  currentAverageValue: Quantity;
  metricName: string;
  selector?: LabelSelector;
}
/* io.k8s.api.autoscaling.v2beta1.ResourceMetricSource */
/* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export interface ResourceMetricSource {
  name: string;
  targetAverageUtilization?: number;
  targetAverageValue?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta1.ResourceMetricStatus */
/* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export interface ResourceMetricStatus {
  currentAverageUtilization?: number;
  currentAverageValue: Quantity;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricSource */
/* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export interface ContainerResourceMetricSource {
  container: string;
  name: string;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ContainerResourceMetricStatus */
/* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export interface ContainerResourceMetricStatus {
  container: string;
  current: MetricValueStatus;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference */
/* CrossVersionObjectReference contains enough information to let you identify the referred resource. */
export interface CrossVersionObjectReference {
  apiVersion?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.autoscaling.v2beta2.ExternalMetricSource */
/* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). */
export interface ExternalMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ExternalMetricStatus */
/* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object. */
export interface ExternalMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}
/* io.k8s.api.autoscaling.v2beta2.HPAScalingPolicy */
/* HPAScalingPolicy is a single policy which must hold true for a specified past interval. */
export interface HPAScalingPolicy {
  periodSeconds: number;
  type: string;
  value: number;
}
/* io.k8s.api.autoscaling.v2beta2.HPAScalingRules */
/* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen. */
export interface HPAScalingRules {
  policies?: HPAScalingPolicy[];
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler */
/* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified. */
export interface HorizontalPodAutoscaler {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: HorizontalPodAutoscalerSpec;
  status?: HorizontalPodAutoscalerStatus;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior */
/* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). */
export interface HorizontalPodAutoscalerBehavior {
  scaleDown?: HPAScalingRules;
  scaleUp?: HPAScalingRules;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerCondition */
/* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point. */
export interface HorizontalPodAutoscalerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList */
/* HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects. */
export interface HorizontalPodAutoscalerList {
  apiVersion?: string;
  items: HorizontalPodAutoscaler[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec */
/* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler. */
export interface HorizontalPodAutoscalerSpec {
  behavior?: HorizontalPodAutoscalerBehavior;
  maxReplicas: number;
  metrics?: MetricSpec[];
  minReplicas?: number;
  scaleTargetRef: CrossVersionObjectReference;
}
/* io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerStatus */
/* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler. */
export interface HorizontalPodAutoscalerStatus {
  conditions: HorizontalPodAutoscalerCondition[];
  currentMetrics?: MetricStatus[];
  currentReplicas: number;
  desiredReplicas: number;
  lastScaleTime?: Time;
  observedGeneration?: number;
}
/* io.k8s.api.autoscaling.v2beta2.MetricIdentifier */
/* MetricIdentifier defines the name and optionally selector for a metric */
export interface MetricIdentifier {
  name: string;
  selector?: LabelSelector;
}
/* io.k8s.api.autoscaling.v2beta2.MetricSpec */
/* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once). */
export interface MetricSpec {
  containerResource?: ContainerResourceMetricSource;
  external?: ExternalMetricSource;
  object?: ObjectMetricSource;
  pods?: PodsMetricSource;
  resource?: ResourceMetricSource;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta2.MetricStatus */
/* MetricStatus describes the last-read state of a single metric. */
export interface MetricStatus {
  containerResource?: ContainerResourceMetricStatus;
  external?: ExternalMetricStatus;
  object?: ObjectMetricStatus;
  pods?: PodsMetricStatus;
  resource?: ResourceMetricStatus;
  type: string;
}
/* io.k8s.api.autoscaling.v2beta2.MetricTarget */
/* MetricTarget defines the target value, average value, or average utilization of a specific metric */
export interface MetricTarget {
  averageUtilization?: number;
  averageValue?: Quantity;
  type: string;
  value?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta2.MetricValueStatus */
/* MetricValueStatus holds the current value for a metric */
export interface MetricValueStatus {
  averageUtilization?: number;
  averageValue?: Quantity;
  value?: Quantity;
}
/* io.k8s.api.autoscaling.v2beta2.ObjectMetricSource */
/* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface ObjectMetricSource {
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus */
/* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object). */
export interface ObjectMetricStatus {
  current: MetricValueStatus;
  describedObject: CrossVersionObjectReference;
  metric: MetricIdentifier;
}
/* io.k8s.api.autoscaling.v2beta2.PodsMetricSource */
/* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value. */
export interface PodsMetricSource {
  metric: MetricIdentifier;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.PodsMetricStatus */
/* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second). */
export interface PodsMetricStatus {
  current: MetricValueStatus;
  metric: MetricIdentifier;
}
/* io.k8s.api.autoscaling.v2beta2.ResourceMetricSource */
/* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set. */
export interface ResourceMetricSource {
  name: string;
  target: MetricTarget;
}
/* io.k8s.api.autoscaling.v2beta2.ResourceMetricStatus */
/* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source. */
export interface ResourceMetricStatus {
  current: MetricValueStatus;
  name: string;
}
/* io.k8s.api.batch.v1.CronJob */
/* CronJob represents the configuration of a single cron job. */
export interface CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: CronJobSpec;
  status?: CronJobStatus;
}
/* io.k8s.api.batch.v1.CronJobList */
/* CronJobList is a collection of cron jobs. */
export interface CronJobList {
  apiVersion?: string;
  items: CronJob[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.batch.v1.CronJobSpec */
/* CronJobSpec describes how the job execution will look like and when it will actually run. */
export interface CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
/* io.k8s.api.batch.v1.CronJobStatus */
/* CronJobStatus represents the current state of a cron job. */
export interface CronJobStatus {
  active?: ObjectReference[];
  lastScheduleTime?: Time;
  lastSuccessfulTime?: Time;
}
/* io.k8s.api.batch.v1.Job */
/* Job represents the configuration of a single job. */
export interface Job {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: JobSpec;
  status?: JobStatus;
}
/* io.k8s.api.batch.v1.JobCondition */
/* JobCondition describes current state of a job. */
export interface JobCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.batch.v1.JobList */
/* JobList is a collection of jobs. */
export interface JobList {
  apiVersion?: string;
  items: Job[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.batch.v1.JobSpec */
/* JobSpec describes how the job execution will look like. */
export interface JobSpec {
  activeDeadlineSeconds?: number;
  backoffLimit?: number;
  completionMode?: string;
  completions?: number;
  manualSelector?: boolean;
  parallelism?: number;
  selector?: LabelSelector;
  suspend?: boolean;
  template: PodTemplateSpec;
  ttlSecondsAfterFinished?: number;
}
/* io.k8s.api.batch.v1.JobStatus */
/* JobStatus represents the current state of a Job. */
export interface JobStatus {
  active?: number;
  completedIndexes?: string;
  completionTime?: Time;
  conditions?: JobCondition[];
  failed?: number;
  startTime?: Time;
  succeeded?: number;
  uncountedTerminatedPods?: UncountedTerminatedPods;
}
/* io.k8s.api.batch.v1.JobTemplateSpec */
/* JobTemplateSpec describes the data a Job should have when created from a template */
export interface JobTemplateSpec {
  metadata?: ObjectMeta;
  spec?: JobSpec;
}
/* io.k8s.api.batch.v1.UncountedTerminatedPods */
/* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters. */
export interface UncountedTerminatedPods {
  failed?: string[];
  succeeded?: string[];
}
/* io.k8s.api.batch.v1beta1.CronJob */
/* CronJob represents the configuration of a single cron job. */
export interface CronJob {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: CronJobSpec;
  status?: CronJobStatus;
}
/* io.k8s.api.batch.v1beta1.CronJobList */
/* CronJobList is a collection of cron jobs. */
export interface CronJobList {
  apiVersion?: string;
  items: CronJob[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.batch.v1beta1.CronJobSpec */
/* CronJobSpec describes how the job execution will look like and when it will actually run. */
export interface CronJobSpec {
  concurrencyPolicy?: string;
  failedJobsHistoryLimit?: number;
  jobTemplate: JobTemplateSpec;
  schedule: string;
  startingDeadlineSeconds?: number;
  successfulJobsHistoryLimit?: number;
  suspend?: boolean;
}
/* io.k8s.api.batch.v1beta1.CronJobStatus */
/* CronJobStatus represents the current state of a cron job. */
export interface CronJobStatus {
  active?: ObjectReference[];
  lastScheduleTime?: Time;
  lastSuccessfulTime?: Time;
}
/* io.k8s.api.batch.v1beta1.JobTemplateSpec */
/* JobTemplateSpec describes the data a Job should have when created from a template */
export interface JobTemplateSpec {
  metadata?: ObjectMeta;
  spec?: JobSpec;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequest */
/* CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.

Kubelets use this API to obtain:
 1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).

This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers. */
export interface CertificateSigningRequest {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CertificateSigningRequestSpec;
  status?: CertificateSigningRequestStatus;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestCondition */
/* CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object */
export interface CertificateSigningRequestCondition {
  lastTransitionTime?: Time;
  lastUpdateTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestList */
/* CertificateSigningRequestList is a collection of CertificateSigningRequest objects */
export interface CertificateSigningRequestList {
  apiVersion?: string;
  items: CertificateSigningRequest[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestSpec */
/* CertificateSigningRequestSpec contains the certificate request. */
export interface CertificateSigningRequestSpec {
  expirationSeconds?: number;
  extra?: {
    [key: string]: unknown;
  };
  groups?: string[];
  request: string;
  signerName: string;
  uid?: string;
  usages?: string[];
  username?: string;
}
/* io.k8s.api.certificates.v1.CertificateSigningRequestStatus */
/* CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate. */
export interface CertificateSigningRequestStatus {
  certificate?: string;
  conditions?: CertificateSigningRequestCondition[];
}
/* io.k8s.api.coordination.v1.Lease */
/* Lease defines a lease concept. */
export interface Lease {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: LeaseSpec;
}
/* io.k8s.api.coordination.v1.LeaseList */
/* LeaseList is a list of Lease objects. */
export interface LeaseList {
  apiVersion?: string;
  items: Lease[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.coordination.v1.LeaseSpec */
/* LeaseSpec is a specification of a Lease. */
export interface LeaseSpec {
  acquireTime?: MicroTime;
  holderIdentity?: string;
  leaseDurationSeconds?: number;
  leaseTransitions?: number;
  renewTime?: MicroTime;
}
/* io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource */
/* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling. */
export interface AWSElasticBlockStoreVolumeSource {
  fsType?: string;
  partition?: number;
  readOnly?: boolean;
  volumeID: string;
}
/* io.k8s.api.core.v1.Affinity */
/* Affinity is a group of affinity scheduling rules. */
export interface Affinity {
  nodeAffinity?: NodeAffinity;
  podAffinity?: PodAffinity;
  podAntiAffinity?: PodAntiAffinity;
}
/* io.k8s.api.core.v1.AttachedVolume */
/* AttachedVolume describes a volume attached to a node */
export interface AttachedVolume {
  devicePath: string;
  name: string;
}
/* io.k8s.api.core.v1.AzureDiskVolumeSource */
/* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. */
export interface AzureDiskVolumeSource {
  cachingMode?: string;
  diskName: string;
  diskURI: string;
  fsType?: string;
  kind?: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.AzureFilePersistentVolumeSource */
/* AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export interface AzureFilePersistentVolumeSource {
  readOnly?: boolean;
  secretName: string;
  secretNamespace?: string;
  shareName: string;
}
/* io.k8s.api.core.v1.AzureFileVolumeSource */
/* AzureFile represents an Azure File Service mount on the host and bind mount to the pod. */
export interface AzureFileVolumeSource {
  readOnly?: boolean;
  secretName: string;
  shareName: string;
}
/* io.k8s.api.core.v1.Binding */
/* Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead. */
export interface Binding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  target: ObjectReference;
}
/* io.k8s.api.core.v1.CSIPersistentVolumeSource */
/* Represents storage that is managed by an external CSI volume driver (Beta feature) */
export interface CSIPersistentVolumeSource {
  controllerExpandSecretRef?: SecretReference;
  controllerPublishSecretRef?: SecretReference;
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: SecretReference;
  nodeStageSecretRef?: SecretReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
  volumeHandle: string;
}
/* io.k8s.api.core.v1.CSIVolumeSource */
/* Represents a source location of a volume to mount, managed by an external CSI driver */
export interface CSIVolumeSource {
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: LocalObjectReference;
  readOnly?: boolean;
  volumeAttributes?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.core.v1.Capabilities */
/* Adds and removes POSIX capabilities from running containers. */
export interface Capabilities {
  add?: string[];
  drop?: string[];
}
/* io.k8s.api.core.v1.CephFSPersistentVolumeSource */
/* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export interface CephFSPersistentVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: SecretReference;
  user?: string;
}
/* io.k8s.api.core.v1.CephFSVolumeSource */
/* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling. */
export interface CephFSVolumeSource {
  monitors: string[];
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: LocalObjectReference;
  user?: string;
}
/* io.k8s.api.core.v1.CinderPersistentVolumeSource */
/* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export interface CinderPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: SecretReference;
  volumeID: string;
}
/* io.k8s.api.core.v1.CinderVolumeSource */
/* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling. */
export interface CinderVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeID: string;
}
/* io.k8s.api.core.v1.ClientIPConfig */
/* ClientIPConfig represents the configurations of Client IP based session affinity. */
export interface ClientIPConfig {
  timeoutSeconds?: number;
}
/* io.k8s.api.core.v1.ComponentCondition */
/* Information about the condition of a component. */
export interface ComponentCondition {
  error?: string;
  message?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.ComponentStatus */
/* ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+ */
export interface ComponentStatus {
  apiVersion?: string;
  conditions?: ComponentCondition[];
  kind?: string;
  metadata?: ObjectMeta;
}
/* io.k8s.api.core.v1.ComponentStatusList */
/* Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+ */
export interface ComponentStatusList {
  apiVersion?: string;
  items: ComponentStatus[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ConfigMap */
/* ConfigMap holds configuration data for pods to consume. */
export interface ConfigMap {
  apiVersion?: string;
  binaryData?: {
    [key: string]: unknown;
  };
  data?: {
    [key: string]: unknown;
  };
  immutable?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
}
/* io.k8s.api.core.v1.ConfigMapEnvSource */
/* ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
export interface ConfigMapEnvSource {
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.ConfigMapKeySelector */
/* Selects a key from a ConfigMap. */
export interface ConfigMapKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.ConfigMapList */
/* ConfigMapList is a resource containing a list of ConfigMap objects. */
export interface ConfigMapList {
  apiVersion?: string;
  items: ConfigMap[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ConfigMapNodeConfigSource */
/* ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration */
export interface ConfigMapNodeConfigSource {
  kubeletConfigKey: string;
  name: string;
  namespace: string;
  resourceVersion?: string;
  uid?: string;
}
/* io.k8s.api.core.v1.ConfigMapProjection */
/* Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode. */
export interface ConfigMapProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.ConfigMapVolumeSource */
/* Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling. */
export interface ConfigMapVolumeSource {
  defaultMode?: number;
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.Container */
/* A single application container that you want to run within a pod. */
export interface Container {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  startupProbe?: Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}
/* io.k8s.api.core.v1.ContainerImage */
/* Describe a container image */
export interface ContainerImage {
  names?: string[];
  sizeBytes?: number;
}
/* io.k8s.api.core.v1.ContainerPort */
/* ContainerPort represents a network port in a single container. */
export interface ContainerPort {
  containerPort: number;
  hostIP?: string;
  hostPort?: number;
  name?: string;
  protocol?: string;
}
/* io.k8s.api.core.v1.ContainerState */
/* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting. */
export interface ContainerState {
  running?: ContainerStateRunning;
  terminated?: ContainerStateTerminated;
  waiting?: ContainerStateWaiting;
}
/* io.k8s.api.core.v1.ContainerStateRunning */
/* ContainerStateRunning is a running state of a container. */
export interface ContainerStateRunning {
  startedAt?: Time;
}
/* io.k8s.api.core.v1.ContainerStateTerminated */
/* ContainerStateTerminated is a terminated state of a container. */
export interface ContainerStateTerminated {
  containerID?: string;
  exitCode: number;
  finishedAt?: Time;
  message?: string;
  reason?: string;
  signal?: number;
  startedAt?: Time;
}
/* io.k8s.api.core.v1.ContainerStateWaiting */
/* ContainerStateWaiting is a waiting state of a container. */
export interface ContainerStateWaiting {
  message?: string;
  reason?: string;
}
/* io.k8s.api.core.v1.ContainerStatus */
/* ContainerStatus contains details for the current status of this container. */
export interface ContainerStatus {
  containerID?: string;
  image: string;
  imageID: string;
  lastState?: ContainerState;
  name: string;
  ready: boolean;
  restartCount: number;
  started?: boolean;
  state?: ContainerState;
}
/* io.k8s.api.core.v1.DaemonEndpoint */
/* DaemonEndpoint contains information about a single Daemon endpoint. */
export interface DaemonEndpoint {
  Port: number;
}
/* io.k8s.api.core.v1.DownwardAPIProjection */
/* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode. */
export interface DownwardAPIProjection {
  items?: DownwardAPIVolumeFile[];
}
/* io.k8s.api.core.v1.DownwardAPIVolumeFile */
/* DownwardAPIVolumeFile represents information to create the file containing the pod field */
export interface DownwardAPIVolumeFile {
  fieldRef?: ObjectFieldSelector;
  mode?: number;
  path: string;
  resourceFieldRef?: ResourceFieldSelector;
}
/* io.k8s.api.core.v1.DownwardAPIVolumeSource */
/* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling. */
export interface DownwardAPIVolumeSource {
  defaultMode?: number;
  items?: DownwardAPIVolumeFile[];
}
/* io.k8s.api.core.v1.EmptyDirVolumeSource */
/* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling. */
export interface EmptyDirVolumeSource {
  medium?: string;
  sizeLimit?: Quantity;
}
/* io.k8s.api.core.v1.EndpointAddress */
/* EndpointAddress is a tuple that describes single IP address. */
export interface EndpointAddress {
  hostname?: string;
  ip: string;
  nodeName?: string;
  targetRef?: ObjectReference;
}
/* io.k8s.api.core.v1.EndpointPort */
/* EndpointPort is a tuple that describes a single port. */
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port: number;
  protocol?: string;
}
/* io.k8s.api.core.v1.EndpointSubset */
/* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
  {
    Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
    Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
  }
The resulting set of endpoints can be viewed as:
    a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
    b: [ 10.10.1.1:309, 10.10.2.2:309 ] */
export interface EndpointSubset {
  addresses?: EndpointAddress[];
  notReadyAddresses?: EndpointAddress[];
  ports?: EndpointPort[];
}
/* io.k8s.api.core.v1.Endpoints */
/* Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ] */
export interface Endpoints {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  subsets?: EndpointSubset[];
}
/* io.k8s.api.core.v1.EndpointsList */
/* EndpointsList is a list of endpoints. */
export interface EndpointsList {
  apiVersion?: string;
  items: Endpoints[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.EnvFromSource */
/* EnvFromSource represents the source of a set of ConfigMaps */
export interface EnvFromSource {
  configMapRef?: ConfigMapEnvSource;
  prefix?: string;
  secretRef?: SecretEnvSource;
}
/* io.k8s.api.core.v1.EnvVar */
/* EnvVar represents an environment variable present in a Container. */
export interface EnvVar {
  name: string;
  value?: string;
  valueFrom?: EnvVarSource;
}
/* io.k8s.api.core.v1.EnvVarSource */
/* EnvVarSource represents a source for the value of an EnvVar. */
export interface EnvVarSource {
  configMapKeyRef?: ConfigMapKeySelector;
  fieldRef?: ObjectFieldSelector;
  resourceFieldRef?: ResourceFieldSelector;
  secretKeyRef?: SecretKeySelector;
}
/* io.k8s.api.core.v1.EphemeralContainer */
/* An EphemeralContainer is a container that may be added temporarily to an existing pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a pod is removed or restarted. If an ephemeral container causes a pod to exceed its resource allocation, the pod may be evicted. Ephemeral containers may not be added by directly updating the pod spec. They must be added via the pod's ephemeralcontainers subresource, and they will appear in the pod spec once added. This is an alpha feature enabled by the EphemeralContainers feature flag. */
export interface EphemeralContainer {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  envFrom?: EnvFromSource[];
  image?: string;
  imagePullPolicy?: string;
  lifecycle?: Lifecycle;
  livenessProbe?: Probe;
  name: string;
  ports?: ContainerPort[];
  readinessProbe?: Probe;
  resources?: ResourceRequirements;
  securityContext?: SecurityContext;
  startupProbe?: Probe;
  stdin?: boolean;
  stdinOnce?: boolean;
  targetContainerName?: string;
  terminationMessagePath?: string;
  terminationMessagePolicy?: string;
  tty?: boolean;
  volumeDevices?: VolumeDevice[];
  volumeMounts?: VolumeMount[];
  workingDir?: string;
}
/* io.k8s.api.core.v1.EphemeralVolumeSource */
/* Represents an ephemeral volume that is handled by a normal storage driver. */
export interface EphemeralVolumeSource {
  volumeClaimTemplate?: PersistentVolumeClaimTemplate;
}
/* io.k8s.api.core.v1.Event */
/* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export interface Event {
  action?: string;
  apiVersion?: string;
  count?: number;
  eventTime?: MicroTime;
  firstTimestamp?: Time;
  involvedObject: ObjectReference;
  kind?: string;
  lastTimestamp?: Time;
  message?: string;
  metadata: ObjectMeta;
  reason?: string;
  related?: ObjectReference;
  reportingComponent?: string;
  reportingInstance?: string;
  series?: EventSeries;
  source?: EventSource;
  type?: string;
}
/* io.k8s.api.core.v1.EventList */
/* EventList is a list of events. */
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.EventSeries */
/* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export interface EventSeries {
  count?: number;
  lastObservedTime?: MicroTime;
}
/* io.k8s.api.core.v1.EventSource */
/* EventSource contains information for an event. */
export interface EventSource {
  component?: string;
  host?: string;
}
/* io.k8s.api.core.v1.ExecAction */
/* ExecAction describes a "run in container" action. */
export interface ExecAction {
  command?: string[];
}
/* io.k8s.api.core.v1.FCVolumeSource */
/* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling. */
export interface FCVolumeSource {
  fsType?: string;
  lun?: number;
  readOnly?: boolean;
  targetWWNs?: string[];
  wwids?: string[];
}
/* io.k8s.api.core.v1.FlexPersistentVolumeSource */
/* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin. */
export interface FlexPersistentVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: SecretReference;
}
/* io.k8s.api.core.v1.FlexVolumeSource */
/* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. */
export interface FlexVolumeSource {
  driver: string;
  fsType?: string;
  options?: {
    [key: string]: unknown;
  };
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
}
/* io.k8s.api.core.v1.FlockerVolumeSource */
/* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling. */
export interface FlockerVolumeSource {
  datasetName?: string;
  datasetUUID?: string;
}
/* io.k8s.api.core.v1.GCEPersistentDiskVolumeSource */
/* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling. */
export interface GCEPersistentDiskVolumeSource {
  fsType?: string;
  partition?: number;
  pdName: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.GitRepoVolumeSource */
/* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container. */
export interface GitRepoVolumeSource {
  directory?: string;
  repository: string;
  revision?: string;
}
/* io.k8s.api.core.v1.GlusterfsPersistentVolumeSource */
/* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export interface GlusterfsPersistentVolumeSource {
  endpoints: string;
  endpointsNamespace?: string;
  path: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.GlusterfsVolumeSource */
/* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling. */
export interface GlusterfsVolumeSource {
  endpoints: string;
  path: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.HTTPGetAction */
/* HTTPGetAction describes an action based on HTTP Get requests. */
export interface HTTPGetAction {
  host?: string;
  httpHeaders?: HTTPHeader[];
  path?: string;
  port: IntOrString;
  scheme?: string;
}
/* io.k8s.api.core.v1.HTTPHeader */
/* HTTPHeader describes a custom header to be used in HTTP probes */
export interface HTTPHeader {
  name: string;
  value: string;
}
/* io.k8s.api.core.v1.Handler */
/* Handler defines a specific action that should be taken */
export interface Handler {
  exec?: ExecAction;
  httpGet?: HTTPGetAction;
  tcpSocket?: TCPSocketAction;
}
/* io.k8s.api.core.v1.HostAlias */
/* HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file. */
export interface HostAlias {
  hostnames?: string[];
  ip?: string;
}
/* io.k8s.api.core.v1.HostPathVolumeSource */
/* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling. */
export interface HostPathVolumeSource {
  path: string;
  type?: string;
}
/* io.k8s.api.core.v1.ISCSIPersistentVolumeSource */
/* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export interface ISCSIPersistentVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: SecretReference;
  targetPortal: string;
}
/* io.k8s.api.core.v1.ISCSIVolumeSource */
/* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling. */
export interface ISCSIVolumeSource {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: string[];
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  targetPortal: string;
}
/* io.k8s.api.core.v1.KeyToPath */
/* Maps a string key to a path within a volume. */
export interface KeyToPath {
  key: string;
  mode?: number;
  path: string;
}
/* io.k8s.api.core.v1.Lifecycle */
/* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted. */
export interface Lifecycle {
  postStart?: Handler;
  preStop?: Handler;
}
/* io.k8s.api.core.v1.LimitRange */
/* LimitRange sets resource usage limits for each kind of resource in a Namespace. */
export interface LimitRange {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: LimitRangeSpec;
}
/* io.k8s.api.core.v1.LimitRangeItem */
/* LimitRangeItem defines a min/max usage limit for any resource that matches on kind. */
export interface LimitRangeItem {
  default?: {
    [key: string]: unknown;
  };
  defaultRequest?: {
    [key: string]: unknown;
  };
  max?: {
    [key: string]: unknown;
  };
  maxLimitRequestRatio?: {
    [key: string]: unknown;
  };
  min?: {
    [key: string]: unknown;
  };
  type: string;
}
/* io.k8s.api.core.v1.LimitRangeList */
/* LimitRangeList is a list of LimitRange items. */
export interface LimitRangeList {
  apiVersion?: string;
  items: LimitRange[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.LimitRangeSpec */
/* LimitRangeSpec defines a min/max usage limit for resources that match on kind. */
export interface LimitRangeSpec {
  limits: LimitRangeItem[];
}
/* io.k8s.api.core.v1.LoadBalancerIngress */
/* LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point. */
export interface LoadBalancerIngress {
  hostname?: string;
  ip?: string;
  ports?: PortStatus[];
}
/* io.k8s.api.core.v1.LoadBalancerStatus */
/* LoadBalancerStatus represents the status of a load-balancer. */
export interface LoadBalancerStatus {
  ingress?: LoadBalancerIngress[];
}
/* io.k8s.api.core.v1.LocalObjectReference */
/* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
export interface LocalObjectReference {
  name?: string;
}
/* io.k8s.api.core.v1.LocalVolumeSource */
/* Local represents directly-attached storage with node affinity (Beta feature) */
export interface LocalVolumeSource {
  fsType?: string;
  path: string;
}
/* io.k8s.api.core.v1.NFSVolumeSource */
/* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling. */
export interface NFSVolumeSource {
  path: string;
  readOnly?: boolean;
  server: string;
}
/* io.k8s.api.core.v1.Namespace */
/* Namespace provides a scope for Names. Use of multiple namespaces is optional. */
export interface Namespace {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NamespaceSpec;
  status?: NamespaceStatus;
}
/* io.k8s.api.core.v1.NamespaceCondition */
/* NamespaceCondition contains details about state of namespace. */
export interface NamespaceCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.NamespaceList */
/* NamespaceList is a list of Namespaces. */
export interface NamespaceList {
  apiVersion?: string;
  items: Namespace[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.NamespaceSpec */
/* NamespaceSpec describes the attributes on a Namespace. */
export interface NamespaceSpec {
  finalizers?: string[];
}
/* io.k8s.api.core.v1.NamespaceStatus */
/* NamespaceStatus is information about the current status of a Namespace. */
export interface NamespaceStatus {
  conditions?: NamespaceCondition[];
  phase?: string;
}
/* io.k8s.api.core.v1.Node */
/* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd). */
export interface Node {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NodeSpec;
  status?: NodeStatus;
}
/* io.k8s.api.core.v1.NodeAddress */
/* NodeAddress contains information for the node's address. */
export interface NodeAddress {
  address: string;
  type: string;
}
/* io.k8s.api.core.v1.NodeAffinity */
/* Node affinity is a group of node affinity scheduling rules. */
export interface NodeAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
/* io.k8s.api.core.v1.NodeCondition */
/* NodeCondition contains condition information for a node. */
export interface NodeCondition {
  lastHeartbeatTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.NodeConfigSource */
/* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22 */
export interface NodeConfigSource {
  configMap?: ConfigMapNodeConfigSource;
}
/* io.k8s.api.core.v1.NodeConfigStatus */
/* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource. */
export interface NodeConfigStatus {
  active?: NodeConfigSource;
  assigned?: NodeConfigSource;
  error?: string;
  lastKnownGood?: NodeConfigSource;
}
/* io.k8s.api.core.v1.NodeDaemonEndpoints */
/* NodeDaemonEndpoints lists ports opened by daemons running on the Node. */
export interface NodeDaemonEndpoints {
  kubeletEndpoint?: DaemonEndpoint;
}
/* io.k8s.api.core.v1.NodeList */
/* NodeList is the whole list of all Nodes which have been registered with master. */
export interface NodeList {
  apiVersion?: string;
  items: Node[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.NodeSelector */
/* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms. */
export interface NodeSelector {
  nodeSelectorTerms: NodeSelectorTerm[];
}
/* io.k8s.api.core.v1.NodeSelectorRequirement */
/* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export interface NodeSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
/* io.k8s.api.core.v1.NodeSelectorTerm */
/* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm. */
export interface NodeSelectorTerm {
  matchExpressions?: NodeSelectorRequirement[];
  matchFields?: NodeSelectorRequirement[];
}
/* io.k8s.api.core.v1.NodeSpec */
/* NodeSpec describes the attributes that a node is created with. */
export interface NodeSpec {
  configSource?: NodeConfigSource;
  externalID?: string;
  podCIDR?: string;
  podCIDRs?: string[];
  providerID?: string;
  taints?: Taint[];
  unschedulable?: boolean;
}
/* io.k8s.api.core.v1.NodeStatus */
/* NodeStatus is information about the current status of a node. */
export interface NodeStatus {
  addresses?: NodeAddress[];
  allocatable?: {
    [key: string]: unknown;
  };
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: NodeCondition[];
  config?: NodeConfigStatus;
  daemonEndpoints?: NodeDaemonEndpoints;
  images?: ContainerImage[];
  nodeInfo?: NodeSystemInfo;
  phase?: string;
  volumesAttached?: AttachedVolume[];
  volumesInUse?: string[];
}
/* io.k8s.api.core.v1.NodeSystemInfo */
/* NodeSystemInfo is a set of ids/uuids to uniquely identify the node. */
export interface NodeSystemInfo {
  architecture: string;
  bootID: string;
  containerRuntimeVersion: string;
  kernelVersion: string;
  kubeProxyVersion: string;
  kubeletVersion: string;
  machineID: string;
  operatingSystem: string;
  osImage: string;
  systemUUID: string;
}
/* io.k8s.api.core.v1.ObjectFieldSelector */
/* ObjectFieldSelector selects an APIVersioned field of an object. */
export interface ObjectFieldSelector {
  apiVersion?: string;
  fieldPath: string;
}
/* io.k8s.api.core.v1.ObjectReference */
/* ObjectReference contains enough information to let you inspect or modify the referred object. */
export interface ObjectReference {
  apiVersion?: string;
  fieldPath?: string;
  kind?: string;
  name?: string;
  namespace?: string;
  resourceVersion?: string;
  uid?: string;
}
/* io.k8s.api.core.v1.PersistentVolume */
/* PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes */
export interface PersistentVolume {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PersistentVolumeSpec;
  status?: PersistentVolumeStatus;
}
/* io.k8s.api.core.v1.PersistentVolumeClaim */
/* PersistentVolumeClaim is a user's request for and claim to a persistent volume */
export interface PersistentVolumeClaim {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PersistentVolumeClaimSpec;
  status?: PersistentVolumeClaimStatus;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimCondition */
/* PersistentVolumeClaimCondition contails details about state of pvc */
export interface PersistentVolumeClaimCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimList */
/* PersistentVolumeClaimList is a list of PersistentVolumeClaim items. */
export interface PersistentVolumeClaimList {
  apiVersion?: string;
  items: PersistentVolumeClaim[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimSpec */
/* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes */
export interface PersistentVolumeClaimSpec {
  accessModes?: string[];
  dataSource?: TypedLocalObjectReference;
  dataSourceRef?: TypedLocalObjectReference;
  resources?: ResourceRequirements;
  selector?: LabelSelector;
  storageClassName?: string;
  volumeMode?: string;
  volumeName?: string;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimStatus */
/* PersistentVolumeClaimStatus is the current status of a persistent volume claim. */
export interface PersistentVolumeClaimStatus {
  accessModes?: string[];
  capacity?: {
    [key: string]: unknown;
  };
  conditions?: PersistentVolumeClaimCondition[];
  phase?: string;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimTemplate */
/* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource. */
export interface PersistentVolumeClaimTemplate {
  metadata?: ObjectMeta;
  spec: PersistentVolumeClaimSpec;
}
/* io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource */
/* PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system). */
export interface PersistentVolumeClaimVolumeSource {
  claimName: string;
  readOnly?: boolean;
}
/* io.k8s.api.core.v1.PersistentVolumeList */
/* PersistentVolumeList is a list of PersistentVolume items. */
export interface PersistentVolumeList {
  apiVersion?: string;
  items: PersistentVolume[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PersistentVolumeSpec */
/* PersistentVolumeSpec is the specification of a persistent volume. */
export interface PersistentVolumeSpec {
  accessModes?: string[];
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  azureDisk?: AzureDiskVolumeSource;
  azureFile?: AzureFilePersistentVolumeSource;
  capacity?: {
    [key: string]: unknown;
  };
  cephfs?: CephFSPersistentVolumeSource;
  cinder?: CinderPersistentVolumeSource;
  claimRef?: ObjectReference;
  csi?: CSIPersistentVolumeSource;
  fc?: FCVolumeSource;
  flexVolume?: FlexPersistentVolumeSource;
  flocker?: FlockerVolumeSource;
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  glusterfs?: GlusterfsPersistentVolumeSource;
  hostPath?: HostPathVolumeSource;
  iscsi?: ISCSIPersistentVolumeSource;
  local?: LocalVolumeSource;
  mountOptions?: string[];
  nfs?: NFSVolumeSource;
  nodeAffinity?: VolumeNodeAffinity;
  persistentVolumeReclaimPolicy?: string;
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  portworxVolume?: PortworxVolumeSource;
  quobyte?: QuobyteVolumeSource;
  rbd?: RBDPersistentVolumeSource;
  scaleIO?: ScaleIOPersistentVolumeSource;
  storageClassName?: string;
  storageos?: StorageOSPersistentVolumeSource;
  volumeMode?: string;
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
/* io.k8s.api.core.v1.PersistentVolumeStatus */
/* PersistentVolumeStatus is the current status of a persistent volume. */
export interface PersistentVolumeStatus {
  message?: string;
  phase?: string;
  reason?: string;
}
/* io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource */
/* Represents a Photon Controller persistent disk resource. */
export interface PhotonPersistentDiskVolumeSource {
  fsType?: string;
  pdID: string;
}
/* io.k8s.api.core.v1.Pod */
/* Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts. */
export interface Pod {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodSpec;
  status?: PodStatus;
}
/* io.k8s.api.core.v1.PodAffinity */
/* Pod affinity is a group of inter pod affinity scheduling rules. */
export interface PodAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
/* io.k8s.api.core.v1.PodAffinityTerm */
/* Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running */
export interface PodAffinityTerm {
  labelSelector?: LabelSelector;
  namespaceSelector?: LabelSelector;
  namespaces?: string[];
  topologyKey: string;
}
/* io.k8s.api.core.v1.PodAntiAffinity */
/* Pod anti affinity is a group of inter pod anti affinity scheduling rules. */
export interface PodAntiAffinity {
  preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
  requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
/* io.k8s.api.core.v1.PodCondition */
/* PodCondition contains details for the current condition of this pod. */
export interface PodCondition {
  lastProbeTime?: Time;
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.PodDNSConfig */
/* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy. */
export interface PodDNSConfig {
  nameservers?: string[];
  options?: PodDNSConfigOption[];
  searches?: string[];
}
/* io.k8s.api.core.v1.PodDNSConfigOption */
/* PodDNSConfigOption defines DNS resolver options of a pod. */
export interface PodDNSConfigOption {
  name?: string;
  value?: string;
}
/* io.k8s.api.core.v1.PodIP */
/* IP address information for entries in the (plural) PodIPs field. Each entry includes:
   IP: An IP address allocated to the pod. Routable at least within the cluster. */
export interface PodIP {
  ip?: string;
}
/* io.k8s.api.core.v1.PodList */
/* PodList is a list of Pods. */
export interface PodList {
  apiVersion?: string;
  items: Pod[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PodReadinessGate */
/* PodReadinessGate contains the reference to a pod condition */
export interface PodReadinessGate {
  conditionType: string;
}
/* io.k8s.api.core.v1.PodSecurityContext */
/* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext. */
export interface PodSecurityContext {
  fsGroup?: number;
  fsGroupChangePolicy?: string;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  seccompProfile?: SeccompProfile;
  supplementalGroups?: number[];
  sysctls?: Sysctl[];
  windowsOptions?: WindowsSecurityContextOptions;
}
/* io.k8s.api.core.v1.PodSpec */
/* PodSpec is a description of a pod. */
export interface PodSpec {
  activeDeadlineSeconds?: number;
  affinity?: Affinity;
  automountServiceAccountToken?: boolean;
  containers: Container[];
  dnsConfig?: PodDNSConfig;
  dnsPolicy?: string;
  enableServiceLinks?: boolean;
  ephemeralContainers?: EphemeralContainer[];
  hostAliases?: HostAlias[];
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostname?: string;
  imagePullSecrets?: LocalObjectReference[];
  initContainers?: Container[];
  nodeName?: string;
  nodeSelector?: {
    [key: string]: unknown;
  };
  overhead?: {
    [key: string]: unknown;
  };
  preemptionPolicy?: string;
  priority?: number;
  priorityClassName?: string;
  readinessGates?: PodReadinessGate[];
  restartPolicy?: string;
  runtimeClassName?: string;
  schedulerName?: string;
  securityContext?: PodSecurityContext;
  serviceAccount?: string;
  serviceAccountName?: string;
  setHostnameAsFQDN?: boolean;
  shareProcessNamespace?: boolean;
  subdomain?: string;
  terminationGracePeriodSeconds?: number;
  tolerations?: Toleration[];
  topologySpreadConstraints?: TopologySpreadConstraint[];
  volumes?: Volume[];
}
/* io.k8s.api.core.v1.PodStatus */
/* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane. */
export interface PodStatus {
  conditions?: PodCondition[];
  containerStatuses?: ContainerStatus[];
  ephemeralContainerStatuses?: ContainerStatus[];
  hostIP?: string;
  initContainerStatuses?: ContainerStatus[];
  message?: string;
  nominatedNodeName?: string;
  phase?: string;
  podIP?: string;
  podIPs?: PodIP[];
  qosClass?: string;
  reason?: string;
  startTime?: Time;
}
/* io.k8s.api.core.v1.PodTemplate */
/* PodTemplate describes a template for creating copies of a predefined pod. */
export interface PodTemplate {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  template?: PodTemplateSpec;
}
/* io.k8s.api.core.v1.PodTemplateList */
/* PodTemplateList is a list of PodTemplates. */
export interface PodTemplateList {
  apiVersion?: string;
  items: PodTemplate[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.PodTemplateSpec */
/* PodTemplateSpec describes the data a pod should have when created from a template */
export interface PodTemplateSpec {
  metadata?: ObjectMeta;
  spec?: PodSpec;
}
export interface PortStatus {
  error?: string;
  port: number;
  protocol: string;
}
/* io.k8s.api.core.v1.PortworxVolumeSource */
/* PortworxVolumeSource represents a Portworx volume resource. */
export interface PortworxVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  volumeID: string;
}
/* io.k8s.api.core.v1.PreferredSchedulingTerm */
/* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op). */
export interface PreferredSchedulingTerm {
  preference: NodeSelectorTerm;
  weight: number;
}
/* io.k8s.api.core.v1.Probe */
/* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
export interface Probe {
  exec?: ExecAction;
  failureThreshold?: number;
  httpGet?: HTTPGetAction;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: TCPSocketAction;
  terminationGracePeriodSeconds?: number;
  timeoutSeconds?: number;
}
/* io.k8s.api.core.v1.ProjectedVolumeSource */
/* Represents a projected volume source */
export interface ProjectedVolumeSource {
  defaultMode?: number;
  sources?: VolumeProjection[];
}
/* io.k8s.api.core.v1.QuobyteVolumeSource */
/* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling. */
export interface QuobyteVolumeSource {
  group?: string;
  readOnly?: boolean;
  registry: string;
  tenant?: string;
  user?: string;
  volume: string;
}
/* io.k8s.api.core.v1.RBDPersistentVolumeSource */
/* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export interface RBDPersistentVolumeSource {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: SecretReference;
  user?: string;
}
/* io.k8s.api.core.v1.RBDVolumeSource */
/* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling. */
export interface RBDVolumeSource {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: string[];
  pool?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  user?: string;
}
/* io.k8s.api.core.v1.ReplicationController */
/* ReplicationController represents the configuration of a replication controller. */
export interface ReplicationController {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ReplicationControllerSpec;
  status?: ReplicationControllerStatus;
}
/* io.k8s.api.core.v1.ReplicationControllerCondition */
/* ReplicationControllerCondition describes the state of a replication controller at a certain point. */
export interface ReplicationControllerCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.api.core.v1.ReplicationControllerList */
/* ReplicationControllerList is a collection of replication controllers. */
export interface ReplicationControllerList {
  apiVersion?: string;
  items: ReplicationController[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ReplicationControllerSpec */
/* ReplicationControllerSpec is the specification of a replication controller. */
export interface ReplicationControllerSpec {
  minReadySeconds?: number;
  replicas?: number;
  selector?: {
    [key: string]: unknown;
  };
  template?: PodTemplateSpec;
}
/* io.k8s.api.core.v1.ReplicationControllerStatus */
/* ReplicationControllerStatus represents the current status of a replication controller. */
export interface ReplicationControllerStatus {
  availableReplicas?: number;
  conditions?: ReplicationControllerCondition[];
  fullyLabeledReplicas?: number;
  observedGeneration?: number;
  readyReplicas?: number;
  replicas: number;
}
/* io.k8s.api.core.v1.ResourceFieldSelector */
/* ResourceFieldSelector represents container resources (cpu, memory) and their output format */
export interface ResourceFieldSelector {
  containerName?: string;
  divisor?: Quantity;
  resource: string;
}
/* io.k8s.api.core.v1.ResourceQuota */
/* ResourceQuota sets aggregate quota restrictions enforced per namespace */
export interface ResourceQuota {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ResourceQuotaSpec;
  status?: ResourceQuotaStatus;
}
/* io.k8s.api.core.v1.ResourceQuotaList */
/* ResourceQuotaList is a list of ResourceQuota items. */
export interface ResourceQuotaList {
  apiVersion?: string;
  items: ResourceQuota[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ResourceQuotaSpec */
/* ResourceQuotaSpec defines the desired hard limits to enforce for Quota. */
export interface ResourceQuotaSpec {
  hard?: {
    [key: string]: unknown;
  };
  scopeSelector?: ScopeSelector;
  scopes?: string[];
}
/* io.k8s.api.core.v1.ResourceQuotaStatus */
/* ResourceQuotaStatus defines the enforced hard limits and observed use. */
export interface ResourceQuotaStatus {
  hard?: {
    [key: string]: unknown;
  };
  used?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.core.v1.ResourceRequirements */
/* ResourceRequirements describes the compute resource requirements. */
export interface ResourceRequirements {
  limits?: {
    [key: string]: unknown;
  };
  requests?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.core.v1.SELinuxOptions */
/* SELinuxOptions are the labels to be applied to the container */
export interface SELinuxOptions {
  level?: string;
  role?: string;
  type?: string;
  user?: string;
}
/* io.k8s.api.core.v1.ScaleIOPersistentVolumeSource */
/* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume */
export interface ScaleIOPersistentVolumeSource {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: SecretReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
/* io.k8s.api.core.v1.ScaleIOVolumeSource */
/* ScaleIOVolumeSource represents a persistent ScaleIO volume */
export interface ScaleIOVolumeSource {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: LocalObjectReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
/* io.k8s.api.core.v1.ScopeSelector */
/* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements. */
export interface ScopeSelector {
  matchExpressions?: ScopedResourceSelectorRequirement[];
}
/* io.k8s.api.core.v1.ScopedResourceSelectorRequirement */
/* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values. */
export interface ScopedResourceSelectorRequirement {
  operator: string;
  scopeName: string;
  values?: string[];
}
/* io.k8s.api.core.v1.SeccompProfile */
/* SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set. */
export interface SeccompProfile {
  localhostProfile?: string;
  type: string;
}
/* io.k8s.api.core.v1.Secret */
/* Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. */
export interface Secret {
  apiVersion?: string;
  data?: {
    [key: string]: unknown;
  };
  immutable?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
  stringData?: {
    [key: string]: unknown;
  };
  type?: string;
}
/* io.k8s.api.core.v1.SecretEnvSource */
/* SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
export interface SecretEnvSource {
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.SecretKeySelector */
/* SecretKeySelector selects a key of a Secret. */
export interface SecretKeySelector {
  key: string;
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.SecretList */
/* SecretList is a list of Secret. */
export interface SecretList {
  apiVersion?: string;
  items: Secret[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.SecretProjection */
/* Adapts a secret into a projected volume.

The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode. */
export interface SecretProjection {
  items?: KeyToPath[];
  name?: string;
  optional?: boolean;
}
/* io.k8s.api.core.v1.SecretReference */
/* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace */
export interface SecretReference {
  name?: string;
  namespace?: string;
}
/* io.k8s.api.core.v1.SecretVolumeSource */
/* Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling. */
export interface SecretVolumeSource {
  defaultMode?: number;
  items?: KeyToPath[];
  optional?: boolean;
  secretName?: string;
}
/* io.k8s.api.core.v1.SecurityContext */
/* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence. */
export interface SecurityContext {
  allowPrivilegeEscalation?: boolean;
  capabilities?: Capabilities;
  privileged?: boolean;
  procMount?: string;
  readOnlyRootFilesystem?: boolean;
  runAsGroup?: number;
  runAsNonRoot?: boolean;
  runAsUser?: number;
  seLinuxOptions?: SELinuxOptions;
  seccompProfile?: SeccompProfile;
  windowsOptions?: WindowsSecurityContextOptions;
}
/* io.k8s.api.core.v1.Service */
/* Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy. */
export interface Service {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: ServiceSpec;
  status?: ServiceStatus;
}
/* io.k8s.api.core.v1.ServiceAccount */
/* ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets */
export interface ServiceAccount {
  apiVersion?: string;
  automountServiceAccountToken?: boolean;
  imagePullSecrets?: LocalObjectReference[];
  kind?: string;
  metadata?: ObjectMeta;
  secrets?: ObjectReference[];
}
/* io.k8s.api.core.v1.ServiceAccountList */
/* ServiceAccountList is a list of ServiceAccount objects */
export interface ServiceAccountList {
  apiVersion?: string;
  items: ServiceAccount[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ServiceAccountTokenProjection */
/* ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise). */
export interface ServiceAccountTokenProjection {
  audience?: string;
  expirationSeconds?: number;
  path: string;
}
/* io.k8s.api.core.v1.ServiceList */
/* ServiceList holds a list of services. */
export interface ServiceList {
  apiVersion?: string;
  items: Service[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.core.v1.ServicePort */
/* ServicePort contains information on service's port. */
export interface ServicePort {
  appProtocol?: string;
  name?: string;
  nodePort?: number;
  port: number;
  protocol?: string;
  targetPort?: IntOrString;
}
/* io.k8s.api.core.v1.ServiceSpec */
/* ServiceSpec describes the attributes that a user creates on a service. */
export interface ServiceSpec {
  allocateLoadBalancerNodePorts?: boolean;
  clusterIP?: string;
  clusterIPs?: string[];
  externalIPs?: string[];
  externalName?: string;
  externalTrafficPolicy?: string;
  healthCheckNodePort?: number;
  internalTrafficPolicy?: string;
  ipFamilies?: string[];
  ipFamilyPolicy?: string;
  loadBalancerClass?: string;
  loadBalancerIP?: string;
  loadBalancerSourceRanges?: string[];
  ports?: ServicePort[];
  publishNotReadyAddresses?: boolean;
  selector?: {
    [key: string]: unknown;
  };
  sessionAffinity?: string;
  sessionAffinityConfig?: SessionAffinityConfig;
  type?: string;
}
/* io.k8s.api.core.v1.ServiceStatus */
/* ServiceStatus represents the current status of a service. */
export interface ServiceStatus {
  conditions?: Condition[];
  loadBalancer?: LoadBalancerStatus;
}
/* io.k8s.api.core.v1.SessionAffinityConfig */
/* SessionAffinityConfig represents the configurations of session affinity. */
export interface SessionAffinityConfig {
  clientIP?: ClientIPConfig;
}
/* io.k8s.api.core.v1.StorageOSPersistentVolumeSource */
/* Represents a StorageOS persistent volume resource. */
export interface StorageOSPersistentVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: ObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
/* io.k8s.api.core.v1.StorageOSVolumeSource */
/* Represents a StorageOS persistent volume resource. */
export interface StorageOSVolumeSource {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: LocalObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
/* io.k8s.api.core.v1.Sysctl */
/* Sysctl defines a kernel parameter to be set */
export interface Sysctl {
  name: string;
  value: string;
}
/* io.k8s.api.core.v1.TCPSocketAction */
/* TCPSocketAction describes an action based on opening a socket */
export interface TCPSocketAction {
  host?: string;
  port: IntOrString;
}
/* io.k8s.api.core.v1.Taint */
/* The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint. */
export interface Taint {
  effect: string;
  key: string;
  timeAdded?: Time;
  value?: string;
}
/* io.k8s.api.core.v1.Toleration */
/* The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>. */
export interface Toleration {
  effect?: string;
  key?: string;
  operator?: string;
  tolerationSeconds?: number;
  value?: string;
}
/* io.k8s.api.core.v1.TopologySelectorLabelRequirement */
/* A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future. */
export interface TopologySelectorLabelRequirement {
  key: string;
  values: string[];
}
/* io.k8s.api.core.v1.TopologySelectorTerm */
/* A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future. */
export interface TopologySelectorTerm {
  matchLabelExpressions?: TopologySelectorLabelRequirement[];
}
/* io.k8s.api.core.v1.TopologySpreadConstraint */
/* TopologySpreadConstraint specifies how to spread matching pods among the given topology. */
export interface TopologySpreadConstraint {
  labelSelector?: LabelSelector;
  maxSkew: number;
  topologyKey: string;
  whenUnsatisfiable: string;
}
/* io.k8s.api.core.v1.TypedLocalObjectReference */
/* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace. */
export interface TypedLocalObjectReference {
  apiGroup?: string;
  kind: string;
  name: string;
}
/* io.k8s.api.core.v1.Volume */
/* Volume represents a named volume in a pod that may be accessed by any container in the pod. */
export interface Volume {
  awsElasticBlockStore?: AWSElasticBlockStoreVolumeSource;
  azureDisk?: AzureDiskVolumeSource;
  azureFile?: AzureFileVolumeSource;
  cephfs?: CephFSVolumeSource;
  cinder?: CinderVolumeSource;
  configMap?: ConfigMapVolumeSource;
  csi?: CSIVolumeSource;
  downwardAPI?: DownwardAPIVolumeSource;
  emptyDir?: EmptyDirVolumeSource;
  ephemeral?: EphemeralVolumeSource;
  fc?: FCVolumeSource;
  flexVolume?: FlexVolumeSource;
  flocker?: FlockerVolumeSource;
  gcePersistentDisk?: GCEPersistentDiskVolumeSource;
  gitRepo?: GitRepoVolumeSource;
  glusterfs?: GlusterfsVolumeSource;
  hostPath?: HostPathVolumeSource;
  iscsi?: ISCSIVolumeSource;
  name: string;
  nfs?: NFSVolumeSource;
  persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
  photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
  portworxVolume?: PortworxVolumeSource;
  projected?: ProjectedVolumeSource;
  quobyte?: QuobyteVolumeSource;
  rbd?: RBDVolumeSource;
  scaleIO?: ScaleIOVolumeSource;
  secret?: SecretVolumeSource;
  storageos?: StorageOSVolumeSource;
  vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
/* io.k8s.api.core.v1.VolumeDevice */
/* volumeDevice describes a mapping of a raw block device within a container. */
export interface VolumeDevice {
  devicePath: string;
  name: string;
}
/* io.k8s.api.core.v1.VolumeMount */
/* VolumeMount describes a mounting of a Volume within a container. */
export interface VolumeMount {
  mountPath: string;
  mountPropagation?: string;
  name: string;
  readOnly?: boolean;
  subPath?: string;
  subPathExpr?: string;
}
/* io.k8s.api.core.v1.VolumeNodeAffinity */
/* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from. */
export interface VolumeNodeAffinity {
  required?: NodeSelector;
}
/* io.k8s.api.core.v1.VolumeProjection */
/* Projection that may be projected along with other supported volume types */
export interface VolumeProjection {
  configMap?: ConfigMapProjection;
  downwardAPI?: DownwardAPIProjection;
  secret?: SecretProjection;
  serviceAccountToken?: ServiceAccountTokenProjection;
}
/* io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource */
/* Represents a vSphere volume resource. */
export interface VsphereVirtualDiskVolumeSource {
  fsType?: string;
  storagePolicyID?: string;
  storagePolicyName?: string;
  volumePath: string;
}
/* io.k8s.api.core.v1.WeightedPodAffinityTerm */
/* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s) */
export interface WeightedPodAffinityTerm {
  podAffinityTerm: PodAffinityTerm;
  weight: number;
}
/* io.k8s.api.core.v1.WindowsSecurityContextOptions */
/* WindowsSecurityContextOptions contain Windows-specific options and credentials. */
export interface WindowsSecurityContextOptions {
  gmsaCredentialSpec?: string;
  gmsaCredentialSpecName?: string;
  hostProcess?: boolean;
  runAsUserName?: string;
}
/* io.k8s.api.discovery.v1.Endpoint */
/* Endpoint represents a single logical "backend" implementing a service. */
export interface Endpoint {
  addresses: string[];
  conditions?: EndpointConditions;
  deprecatedTopology?: {
    [key: string]: unknown;
  };
  hints?: EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: ObjectReference;
  zone?: string;
}
/* io.k8s.api.discovery.v1.EndpointConditions */
/* EndpointConditions represents the current condition of an endpoint. */
export interface EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
/* io.k8s.api.discovery.v1.EndpointHints */
/* EndpointHints provides hints describing how an endpoint should be consumed. */
export interface EndpointHints {
  forZones?: ForZone[];
}
/* io.k8s.api.discovery.v1.EndpointPort */
/* EndpointPort represents a Port used by an EndpointSlice */
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
/* io.k8s.api.discovery.v1.EndpointSlice */
/* EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export interface EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: Endpoint[];
  kind?: string;
  metadata?: ObjectMeta;
  ports?: EndpointPort[];
}
/* io.k8s.api.discovery.v1.EndpointSliceList */
/* EndpointSliceList represents a list of endpoint slices */
export interface EndpointSliceList {
  apiVersion?: string;
  items: EndpointSlice[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.discovery.v1.ForZone */
/* ForZone provides information about which zones should consume this endpoint. */
export interface ForZone {
  name: string;
}
/* io.k8s.api.discovery.v1beta1.Endpoint */
/* Endpoint represents a single logical "backend" implementing a service. */
export interface Endpoint {
  addresses: string[];
  conditions?: EndpointConditions;
  hints?: EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: ObjectReference;
  topology?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.discovery.v1beta1.EndpointConditions */
/* EndpointConditions represents the current condition of an endpoint. */
export interface EndpointConditions {
  ready?: boolean;
  serving?: boolean;
  terminating?: boolean;
}
/* io.k8s.api.discovery.v1beta1.EndpointHints */
/* EndpointHints provides hints describing how an endpoint should be consumed. */
export interface EndpointHints {
  forZones?: ForZone[];
}
/* io.k8s.api.discovery.v1beta1.EndpointPort */
/* EndpointPort represents a Port used by an EndpointSlice */
export interface EndpointPort {
  appProtocol?: string;
  name?: string;
  port?: number;
  protocol?: string;
}
/* io.k8s.api.discovery.v1beta1.EndpointSlice */
/* EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints. */
export interface EndpointSlice {
  addressType: string;
  apiVersion?: string;
  endpoints: Endpoint[];
  kind?: string;
  metadata?: ObjectMeta;
  ports?: EndpointPort[];
}
/* io.k8s.api.discovery.v1beta1.EndpointSliceList */
/* EndpointSliceList represents a list of endpoint slices */
export interface EndpointSliceList {
  apiVersion?: string;
  items: EndpointSlice[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.discovery.v1beta1.ForZone */
/* ForZone provides information about which zones should consume this endpoint. */
export interface ForZone {
  name: string;
}
/* io.k8s.api.events.v1.Event */
/* Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export interface Event {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: Time;
  deprecatedLastTimestamp?: Time;
  deprecatedSource?: EventSource;
  eventTime: MicroTime;
  kind?: string;
  metadata?: ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: ObjectReference;
  related?: ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: EventSeries;
  type?: string;
}
/* io.k8s.api.events.v1.EventList */
/* EventList is a list of Event objects. */
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.events.v1.EventSeries */
/* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations. */
export interface EventSeries {
  count: number;
  lastObservedTime: MicroTime;
}
/* io.k8s.api.events.v1beta1.Event */
/* Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data. */
export interface Event {
  action?: string;
  apiVersion?: string;
  deprecatedCount?: number;
  deprecatedFirstTimestamp?: Time;
  deprecatedLastTimestamp?: Time;
  deprecatedSource?: EventSource;
  eventTime: MicroTime;
  kind?: string;
  metadata?: ObjectMeta;
  note?: string;
  reason?: string;
  regarding?: ObjectReference;
  related?: ObjectReference;
  reportingController?: string;
  reportingInstance?: string;
  series?: EventSeries;
  type?: string;
}
/* io.k8s.api.events.v1beta1.EventList */
/* EventList is a list of Event objects. */
export interface EventList {
  apiVersion?: string;
  items: Event[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.events.v1beta1.EventSeries */
/* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. */
export interface EventSeries {
  count: number;
  lastObservedTime: MicroTime;
}
/* io.k8s.api.flowcontrol.v1beta1.FlowDistinguisherMethod */
/* FlowDistinguisherMethod specifies the method of a flow distinguisher. */
export interface FlowDistinguisherMethod {
  type: string;
}
/* io.k8s.api.flowcontrol.v1beta1.FlowSchema */
/* FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher". */
export interface FlowSchema {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: FlowSchemaSpec;
  status?: FlowSchemaStatus;
}
/* io.k8s.api.flowcontrol.v1beta1.FlowSchemaCondition */
/* FlowSchemaCondition describes conditions for a FlowSchema. */
export interface FlowSchemaCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
/* io.k8s.api.flowcontrol.v1beta1.FlowSchemaList */
/* FlowSchemaList is a list of FlowSchema objects. */
export interface FlowSchemaList {
  apiVersion?: string;
  items: FlowSchema[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.flowcontrol.v1beta1.FlowSchemaSpec */
/* FlowSchemaSpec describes how the FlowSchema's specification looks like. */
export interface FlowSchemaSpec {
  distinguisherMethod?: FlowDistinguisherMethod;
  matchingPrecedence?: number;
  priorityLevelConfiguration: PriorityLevelConfigurationReference;
  rules?: PolicyRulesWithSubjects[];
}
/* io.k8s.api.flowcontrol.v1beta1.FlowSchemaStatus */
/* FlowSchemaStatus represents the current state of a FlowSchema. */
export interface FlowSchemaStatus {
  conditions?: FlowSchemaCondition[];
}
/* io.k8s.api.flowcontrol.v1beta1.GroupSubject */
/* GroupSubject holds detailed information for group-kind subject. */
export interface GroupSubject {
  name: string;
}
/* io.k8s.api.flowcontrol.v1beta1.LimitResponse */
/* LimitResponse defines how to handle requests that can not be executed right now. */
export interface LimitResponse {
  queuing?: QueuingConfiguration;
  type: string;
}
/* io.k8s.api.flowcontrol.v1beta1.LimitedPriorityLevelConfiguration */
/* LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
 * How are requests for this priority level limited?
 * What should be done with requests that exceed the limit? */
export interface LimitedPriorityLevelConfiguration {
  assuredConcurrencyShares?: number;
  limitResponse?: LimitResponse;
}
/* io.k8s.api.flowcontrol.v1beta1.NonResourcePolicyRule */
/* NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request. */
export interface NonResourcePolicyRule {
  nonResourceURLs: string[];
  verbs: string[];
}
/* io.k8s.api.flowcontrol.v1beta1.PolicyRulesWithSubjects */
/* PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request. */
export interface PolicyRulesWithSubjects {
  nonResourceRules?: NonResourcePolicyRule[];
  resourceRules?: ResourcePolicyRule[];
  subjects: Subject[];
}
/* io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfiguration */
/* PriorityLevelConfiguration represents the configuration of a priority level. */
export interface PriorityLevelConfiguration {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PriorityLevelConfigurationSpec;
  status?: PriorityLevelConfigurationStatus;
}
/* io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfigurationCondition */
/* PriorityLevelConfigurationCondition defines the condition of priority level. */
export interface PriorityLevelConfigurationCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status?: string;
  type?: string;
}
/* io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfigurationList */
/* PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects. */
export interface PriorityLevelConfigurationList {
  apiVersion?: string;
  items: PriorityLevelConfiguration[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfigurationReference */
/* PriorityLevelConfigurationReference contains information that points to the "request-priority" being used. */
export interface PriorityLevelConfigurationReference {
  name: string;
}
/* io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfigurationSpec */
/* PriorityLevelConfigurationSpec specifies the configuration of a priority level. */
export interface PriorityLevelConfigurationSpec {
  limited?: LimitedPriorityLevelConfiguration;
  type: string;
}
/* io.k8s.api.flowcontrol.v1beta1.PriorityLevelConfigurationStatus */
/* PriorityLevelConfigurationStatus represents the current state of a "request-priority". */
export interface PriorityLevelConfigurationStatus {
  conditions?: PriorityLevelConfigurationCondition[];
}
/* io.k8s.api.flowcontrol.v1beta1.QueuingConfiguration */
/* QueuingConfiguration holds the configuration parameters for queuing */
export interface QueuingConfiguration {
  handSize?: number;
  queueLengthLimit?: number;
  queues?: number;
}
/* io.k8s.api.flowcontrol.v1beta1.ResourcePolicyRule */
/* ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request. */
export interface ResourcePolicyRule {
  apiGroups: string[];
  clusterScope?: boolean;
  namespaces?: string[];
  resources: string[];
  verbs: string[];
}
/* io.k8s.api.flowcontrol.v1beta1.ServiceAccountSubject */
/* ServiceAccountSubject holds detailed information for service-account-kind subject. */
export interface ServiceAccountSubject {
  name: string;
  namespace: string;
}
/* io.k8s.api.flowcontrol.v1beta1.Subject */
/* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account. */
export interface Subject {
  group?: GroupSubject;
  kind: string;
  serviceAccount?: ServiceAccountSubject;
  user?: UserSubject;
}
/* io.k8s.api.flowcontrol.v1beta1.UserSubject */
/* UserSubject holds detailed information for user-kind subject. */
export interface UserSubject {
  name: string;
}
/* io.k8s.api.networking.v1.HTTPIngressPath */
/* HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend. */
export interface HTTPIngressPath {
  backend: IngressBackend;
  path?: string;
  pathType: string;
}
/* io.k8s.api.networking.v1.HTTPIngressRuleValue */
/* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'. */
export interface HTTPIngressRuleValue {
  paths: HTTPIngressPath[];
}
/* io.k8s.api.networking.v1.IPBlock */
/* IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule. */
export interface IPBlock {
  cidr: string;
  except?: string[];
}
/* io.k8s.api.networking.v1.Ingress */
/* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. */
export interface Ingress {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: IngressSpec;
  status?: IngressStatus;
}
/* io.k8s.api.networking.v1.IngressBackend */
/* IngressBackend describes all endpoints for a given service and port. */
export interface IngressBackend {
  resource?: TypedLocalObjectReference;
  service?: IngressServiceBackend;
}
/* io.k8s.api.networking.v1.IngressClass */
/* IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class. */
export interface IngressClass {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: IngressClassSpec;
}
/* io.k8s.api.networking.v1.IngressClassList */
/* IngressClassList is a collection of IngressClasses. */
export interface IngressClassList {
  apiVersion?: string;
  items: IngressClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.IngressClassParametersReference */
/* IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource. */
export interface IngressClassParametersReference {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
  scope?: string;
}
/* io.k8s.api.networking.v1.IngressClassSpec */
/* IngressClassSpec provides information about the class of an Ingress. */
export interface IngressClassSpec {
  controller?: string;
  parameters?: IngressClassParametersReference;
}
/* io.k8s.api.networking.v1.IngressList */
/* IngressList is a collection of Ingress. */
export interface IngressList {
  apiVersion?: string;
  items: Ingress[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.IngressRule */
/* IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue. */
export interface IngressRule {
  host?: string;
  http?: HTTPIngressRuleValue;
}
/* io.k8s.api.networking.v1.IngressServiceBackend */
/* IngressServiceBackend references a Kubernetes Service as a Backend. */
export interface IngressServiceBackend {
  name: string;
  port?: ServiceBackendPort;
}
/* io.k8s.api.networking.v1.IngressSpec */
/* IngressSpec describes the Ingress the user wishes to exist. */
export interface IngressSpec {
  defaultBackend?: IngressBackend;
  ingressClassName?: string;
  rules?: IngressRule[];
  tls?: IngressTLS[];
}
/* io.k8s.api.networking.v1.IngressStatus */
/* IngressStatus describe the current state of the Ingress. */
export interface IngressStatus {
  loadBalancer?: LoadBalancerStatus;
}
/* io.k8s.api.networking.v1.IngressTLS */
/* IngressTLS describes the transport layer security associated with an Ingress. */
export interface IngressTLS {
  hosts?: string[];
  secretName?: string;
}
/* io.k8s.api.networking.v1.NetworkPolicy */
/* NetworkPolicy describes what network traffic is allowed for a set of Pods */
export interface NetworkPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: NetworkPolicySpec;
}
/* io.k8s.api.networking.v1.NetworkPolicyEgressRule */
/* NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8 */
export interface NetworkPolicyEgressRule {
  ports?: NetworkPolicyPort[];
  to?: NetworkPolicyPeer[];
}
/* io.k8s.api.networking.v1.NetworkPolicyIngressRule */
/* NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from. */
export interface NetworkPolicyIngressRule {
  from?: NetworkPolicyPeer[];
  ports?: NetworkPolicyPort[];
}
/* io.k8s.api.networking.v1.NetworkPolicyList */
/* NetworkPolicyList is a list of NetworkPolicy objects. */
export interface NetworkPolicyList {
  apiVersion?: string;
  items: NetworkPolicy[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.networking.v1.NetworkPolicyPeer */
/* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed */
export interface NetworkPolicyPeer {
  ipBlock?: IPBlock;
  namespaceSelector?: LabelSelector;
  podSelector?: LabelSelector;
}
/* io.k8s.api.networking.v1.NetworkPolicyPort */
/* NetworkPolicyPort describes a port to allow traffic on */
export interface NetworkPolicyPort {
  endPort?: number;
  port?: IntOrString;
  protocol?: string;
}
/* io.k8s.api.networking.v1.NetworkPolicySpec */
/* NetworkPolicySpec provides the specification of a NetworkPolicy */
export interface NetworkPolicySpec {
  egress?: NetworkPolicyEgressRule[];
  ingress?: NetworkPolicyIngressRule[];
  podSelector: LabelSelector;
  policyTypes?: string[];
}
/* io.k8s.api.networking.v1.ServiceBackendPort */
/* ServiceBackendPort is the service port being referenced. */
export interface ServiceBackendPort {
  name?: string;
  number?: number;
}
/* io.k8s.api.node.v1.Overhead */
/* Overhead structure represents the resource overhead associated with running a pod. */
export interface Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.node.v1.RuntimeClass */
/* RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/ */
export interface RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: ObjectMeta;
  overhead?: Overhead;
  scheduling?: Scheduling;
}
/* io.k8s.api.node.v1.RuntimeClassList */
/* RuntimeClassList is a list of RuntimeClass objects. */
export interface RuntimeClassList {
  apiVersion?: string;
  items: RuntimeClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.node.v1.Scheduling */
/* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export interface Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: Toleration[];
}
/* io.k8s.api.node.v1beta1.Overhead */
/* Overhead structure represents the resource overhead associated with running a pod. */
export interface Overhead {
  podFixed?: {
    [key: string]: unknown;
  };
}
/* io.k8s.api.node.v1beta1.RuntimeClass */
/* RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class */
export interface RuntimeClass {
  apiVersion?: string;
  handler: string;
  kind?: string;
  metadata?: ObjectMeta;
  overhead?: Overhead;
  scheduling?: Scheduling;
}
/* io.k8s.api.node.v1beta1.RuntimeClassList */
/* RuntimeClassList is a list of RuntimeClass objects. */
export interface RuntimeClassList {
  apiVersion?: string;
  items: RuntimeClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.node.v1beta1.Scheduling */
/* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass. */
export interface Scheduling {
  nodeSelector?: {
    [key: string]: unknown;
  };
  tolerations?: Toleration[];
}
/* io.k8s.api.policy.v1.Eviction */
/* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions. */
export interface Eviction {
  apiVersion?: string;
  deleteOptions?: DeleteOptions;
  kind?: string;
  metadata?: ObjectMeta;
}
/* io.k8s.api.policy.v1.PodDisruptionBudget */
/* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export interface PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodDisruptionBudgetSpec;
  status?: PodDisruptionBudgetStatus;
}
/* io.k8s.api.policy.v1.PodDisruptionBudgetList */
/* PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export interface PodDisruptionBudgetList {
  apiVersion?: string;
  items: PodDisruptionBudget[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.policy.v1.PodDisruptionBudgetSpec */
/* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export interface PodDisruptionBudgetSpec {
  maxUnavailable?: IntOrString;
  minAvailable?: IntOrString;
  selector?: LabelSelector;
}
/* io.k8s.api.policy.v1.PodDisruptionBudgetStatus */
/* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export interface PodDisruptionBudgetStatus {
  conditions?: Condition[];
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: {
    [key: string]: unknown;
  };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
/* io.k8s.api.policy.v1beta1.AllowedCSIDriver */
/* AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used. */
export interface AllowedCSIDriver {
  name: string;
}
/* io.k8s.api.policy.v1beta1.AllowedFlexVolume */
/* AllowedFlexVolume represents a single Flexvolume that is allowed to be used. */
export interface AllowedFlexVolume {
  driver: string;
}
/* io.k8s.api.policy.v1beta1.AllowedHostPath */
/* AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined. */
export interface AllowedHostPath {
  pathPrefix?: string;
  readOnly?: boolean;
}
/* io.k8s.api.policy.v1beta1.FSGroupStrategyOptions */
/* FSGroupStrategyOptions defines the strategy type and options used to create the strategy. */
export interface FSGroupStrategyOptions {
  ranges?: IDRange[];
  rule?: string;
}
/* io.k8s.api.policy.v1beta1.HostPortRange */
/* HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined. */
export interface HostPortRange {
  max: number;
  min: number;
}
/* io.k8s.api.policy.v1beta1.IDRange */
/* IDRange provides a min/max of an allowed range of IDs. */
export interface IDRange {
  max: number;
  min: number;
}
/* io.k8s.api.policy.v1beta1.PodDisruptionBudget */
/* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods */
export interface PodDisruptionBudget {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodDisruptionBudgetSpec;
  status?: PodDisruptionBudgetStatus;
}
/* io.k8s.api.policy.v1beta1.PodDisruptionBudgetList */
/* PodDisruptionBudgetList is a collection of PodDisruptionBudgets. */
export interface PodDisruptionBudgetList {
  apiVersion?: string;
  items: PodDisruptionBudget[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec */
/* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget. */
export interface PodDisruptionBudgetSpec {
  maxUnavailable?: IntOrString;
  minAvailable?: IntOrString;
  selector?: LabelSelector;
}
/* io.k8s.api.policy.v1beta1.PodDisruptionBudgetStatus */
/* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system. */
export interface PodDisruptionBudgetStatus {
  conditions?: Condition[];
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: {
    [key: string]: unknown;
  };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
/* io.k8s.api.policy.v1beta1.PodSecurityPolicy */
/* PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated in 1.21. */
export interface PodSecurityPolicy {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: PodSecurityPolicySpec;
}
/* io.k8s.api.policy.v1beta1.PodSecurityPolicyList */
/* PodSecurityPolicyList is a list of PodSecurityPolicy objects. */
export interface PodSecurityPolicyList {
  apiVersion?: string;
  items: PodSecurityPolicy[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.policy.v1beta1.PodSecurityPolicySpec */
/* PodSecurityPolicySpec defines the policy enforced. */
export interface PodSecurityPolicySpec {
  allowPrivilegeEscalation?: boolean;
  allowedCSIDrivers?: AllowedCSIDriver[];
  allowedCapabilities?: string[];
  allowedFlexVolumes?: AllowedFlexVolume[];
  allowedHostPaths?: AllowedHostPath[];
  allowedProcMountTypes?: string[];
  allowedUnsafeSysctls?: string[];
  defaultAddCapabilities?: string[];
  defaultAllowPrivilegeEscalation?: boolean;
  forbiddenSysctls?: string[];
  fsGroup: FSGroupStrategyOptions;
  hostIPC?: boolean;
  hostNetwork?: boolean;
  hostPID?: boolean;
  hostPorts?: HostPortRange[];
  privileged?: boolean;
  readOnlyRootFilesystem?: boolean;
  requiredDropCapabilities?: string[];
  runAsGroup?: RunAsGroupStrategyOptions;
  runAsUser: RunAsUserStrategyOptions;
  runtimeClass?: RuntimeClassStrategyOptions;
  seLinux: SELinuxStrategyOptions;
  supplementalGroups: SupplementalGroupsStrategyOptions;
  volumes?: string[];
}
/* io.k8s.api.policy.v1beta1.RunAsGroupStrategyOptions */
/* RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy. */
export interface RunAsGroupStrategyOptions {
  ranges?: IDRange[];
  rule: string;
}
/* io.k8s.api.policy.v1beta1.RunAsUserStrategyOptions */
/* RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. */
export interface RunAsUserStrategyOptions {
  ranges?: IDRange[];
  rule: string;
}
/* io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions */
/* RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod. */
export interface RuntimeClassStrategyOptions {
  allowedRuntimeClassNames: string[];
  defaultRuntimeClassName?: string;
}
/* io.k8s.api.policy.v1beta1.SELinuxStrategyOptions */
/* SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. */
export interface SELinuxStrategyOptions {
  rule: string;
  seLinuxOptions?: SELinuxOptions;
}
/* io.k8s.api.policy.v1beta1.SupplementalGroupsStrategyOptions */
/* SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy. */
export interface SupplementalGroupsStrategyOptions {
  ranges?: IDRange[];
  rule?: string;
}
/* io.k8s.api.rbac.v1.AggregationRule */
/* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole */
export interface AggregationRule {
  clusterRoleSelectors?: LabelSelector[];
}
/* io.k8s.api.rbac.v1.ClusterRole */
/* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding. */
export interface ClusterRole {
  aggregationRule?: AggregationRule;
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  rules?: PolicyRule[];
}
/* io.k8s.api.rbac.v1.ClusterRoleBinding */
/* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. */
export interface ClusterRoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  roleRef: RoleRef;
  subjects?: Subject[];
}
/* io.k8s.api.rbac.v1.ClusterRoleBindingList */
/* ClusterRoleBindingList is a collection of ClusterRoleBindings */
export interface ClusterRoleBindingList {
  apiVersion?: string;
  items: ClusterRoleBinding[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.ClusterRoleList */
/* ClusterRoleList is a collection of ClusterRoles */
export interface ClusterRoleList {
  apiVersion?: string;
  items: ClusterRole[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.PolicyRule */
/* PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to. */
export interface PolicyRule {
  apiGroups?: string[];
  nonResourceURLs?: string[];
  resourceNames?: string[];
  resources?: string[];
  verbs: string[];
}
/* io.k8s.api.rbac.v1.Role */
/* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. */
export interface Role {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  rules?: PolicyRule[];
}
/* io.k8s.api.rbac.v1.RoleBinding */
/* RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. */
export interface RoleBinding {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  roleRef: RoleRef;
  subjects?: Subject[];
}
/* io.k8s.api.rbac.v1.RoleBindingList */
/* RoleBindingList is a collection of RoleBindings */
export interface RoleBindingList {
  apiVersion?: string;
  items: RoleBinding[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.RoleList */
/* RoleList is a collection of Roles */
export interface RoleList {
  apiVersion?: string;
  items: Role[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.rbac.v1.RoleRef */
/* RoleRef contains information that points to the role being used */
export interface RoleRef {
  apiGroup: string;
  kind: string;
  name: string;
}
/* io.k8s.api.rbac.v1.Subject */
/* Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names. */
export interface Subject {
  apiGroup?: string;
  kind: string;
  name: string;
  namespace?: string;
}
/* io.k8s.api.scheduling.v1.PriorityClass */
/* PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer. */
export interface PriorityClass {
  apiVersion?: string;
  description?: string;
  globalDefault?: boolean;
  kind?: string;
  metadata?: ObjectMeta;
  preemptionPolicy?: string;
  value: number;
}
/* io.k8s.api.scheduling.v1.PriorityClassList */
/* PriorityClassList is a collection of priority classes. */
export interface PriorityClassList {
  apiVersion?: string;
  items: PriorityClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.CSIDriver */
/* CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced. */
export interface CSIDriver {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CSIDriverSpec;
}
/* io.k8s.api.storage.v1.CSIDriverList */
/* CSIDriverList is a collection of CSIDriver objects. */
export interface CSIDriverList {
  apiVersion?: string;
  items: CSIDriver[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.CSIDriverSpec */
/* CSIDriverSpec is the specification of a CSIDriver. */
export interface CSIDriverSpec {
  attachRequired?: boolean;
  fsGroupPolicy?: string;
  podInfoOnMount?: boolean;
  requiresRepublish?: boolean;
  storageCapacity?: boolean;
  tokenRequests?: TokenRequest[];
  volumeLifecycleModes?: string[];
}
/* io.k8s.api.storage.v1.CSINode */
/* CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object. */
export interface CSINode {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CSINodeSpec;
}
/* io.k8s.api.storage.v1.CSINodeDriver */
/* CSINodeDriver holds information about the specification of one CSI driver installed on a node */
export interface CSINodeDriver {
  allocatable?: VolumeNodeResources;
  name: string;
  nodeID: string;
  topologyKeys?: string[];
}
/* io.k8s.api.storage.v1.CSINodeList */
/* CSINodeList is a collection of CSINode objects. */
export interface CSINodeList {
  apiVersion?: string;
  items: CSINode[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.CSINodeSpec */
/* CSINodeSpec holds information about the specification of all CSI drivers installed on a node */
export interface CSINodeSpec {
  drivers: CSINodeDriver[];
}
/* io.k8s.api.storage.v1.StorageClass */
/* StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name. */
export interface StorageClass {
  allowVolumeExpansion?: boolean;
  allowedTopologies?: TopologySelectorTerm[];
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  mountOptions?: string[];
  parameters?: {
    [key: string]: unknown;
  };
  provisioner: string;
  reclaimPolicy?: string;
  volumeBindingMode?: string;
}
/* io.k8s.api.storage.v1.StorageClassList */
/* StorageClassList is a collection of storage classes. */
export interface StorageClassList {
  apiVersion?: string;
  items: StorageClass[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.TokenRequest */
/* TokenRequest contains parameters of a service account token. */
export interface TokenRequest {
  audience: string;
  expirationSeconds?: number;
}
/* io.k8s.api.storage.v1.VolumeAttachment */
/* VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced. */
export interface VolumeAttachment {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: VolumeAttachmentSpec;
  status?: VolumeAttachmentStatus;
}
/* io.k8s.api.storage.v1.VolumeAttachmentList */
/* VolumeAttachmentList is a collection of VolumeAttachment objects. */
export interface VolumeAttachmentList {
  apiVersion?: string;
  items: VolumeAttachment[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.api.storage.v1.VolumeAttachmentSource */
/* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set. */
export interface VolumeAttachmentSource {
  inlineVolumeSpec?: PersistentVolumeSpec;
  persistentVolumeName?: string;
}
/* io.k8s.api.storage.v1.VolumeAttachmentSpec */
/* VolumeAttachmentSpec is the specification of a VolumeAttachment request. */
export interface VolumeAttachmentSpec {
  attacher: string;
  nodeName: string;
  source: VolumeAttachmentSource;
}
/* io.k8s.api.storage.v1.VolumeAttachmentStatus */
/* VolumeAttachmentStatus is the status of a VolumeAttachment request. */
export interface VolumeAttachmentStatus {
  attachError?: VolumeError;
  attached: boolean;
  attachmentMetadata?: {
    [key: string]: unknown;
  };
  detachError?: VolumeError;
}
/* io.k8s.api.storage.v1.VolumeError */
/* VolumeError captures an error encountered during a volume operation. */
export interface VolumeError {
  message?: string;
  time?: Time;
}
/* io.k8s.api.storage.v1.VolumeNodeResources */
/* VolumeNodeResources is a set of resource limits for scheduling of volumes. */
export interface VolumeNodeResources {
  count?: number;
}
/* io.k8s.api.storage.v1beta1.CSIStorageCapacity */
/* CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.

For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"

The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero

The producer of these objects can decide which approach is more suitable.

They are consumed by the kube-scheduler if the CSIStorageCapacity beta feature gate is enabled there and a CSI driver opts into capacity-aware scheduling with CSIDriver.StorageCapacity. */
export interface CSIStorageCapacity {
  apiVersion?: string;
  capacity?: Quantity;
  kind?: string;
  maximumVolumeSize?: Quantity;
  metadata?: ObjectMeta;
  nodeTopology?: LabelSelector;
  storageClassName: string;
}
/* io.k8s.api.storage.v1beta1.CSIStorageCapacityList */
/* CSIStorageCapacityList is a collection of CSIStorageCapacity objects. */
export interface CSIStorageCapacityList {
  apiVersion?: string;
  items: CSIStorageCapacity[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition */
/* CustomResourceColumnDefinition specifies a column for server side printing. */
export interface CustomResourceColumnDefinition {
  description?: string;
  format?: string;
  jsonPath: string;
  name: string;
  priority?: number;
  type: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion */
/* CustomResourceConversion describes how to convert different versions of a CR. */
export interface CustomResourceConversion {
  strategy: string;
  webhook?: WebhookConversion;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition */
/* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. */
export interface CustomResourceDefinition {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec: CustomResourceDefinitionSpec;
  status?: CustomResourceDefinitionStatus;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition */
/* CustomResourceDefinitionCondition contains details for the current condition of this pod. */
export interface CustomResourceDefinitionCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionList */
/* CustomResourceDefinitionList is a list of CustomResourceDefinition objects. */
export interface CustomResourceDefinitionList {
  apiVersion?: string;
  items: CustomResourceDefinition[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames */
/* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition */
export interface CustomResourceDefinitionNames {
  categories?: string[];
  kind: string;
  listKind?: string;
  plural: string;
  shortNames?: string[];
  singular?: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec */
/* CustomResourceDefinitionSpec describes how a user wants their resource to appear */
export interface CustomResourceDefinitionSpec {
  conversion?: CustomResourceConversion;
  group: string;
  names: CustomResourceDefinitionNames;
  preserveUnknownFields?: boolean;
  scope: string;
  versions: CustomResourceDefinitionVersion[];
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus */
/* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition */
export interface CustomResourceDefinitionStatus {
  acceptedNames?: CustomResourceDefinitionNames;
  conditions?: CustomResourceDefinitionCondition[];
  storedVersions?: string[];
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion */
/* CustomResourceDefinitionVersion describes a version for CRD. */
export interface CustomResourceDefinitionVersion {
  additionalPrinterColumns?: CustomResourceColumnDefinition[];
  deprecated?: boolean;
  deprecationWarning?: string;
  name: string;
  schema?: CustomResourceValidation;
  served: boolean;
  storage: boolean;
  subresources?: CustomResourceSubresources;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale */
/* CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources. */
export interface CustomResourceSubresourceScale {
  labelSelectorPath?: string;
  specReplicasPath: string;
  statusReplicasPath: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus */
/* CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza */
export type CustomResourceSubresourceStatus = {
  [key: string]: unknown;
};
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources */
/* CustomResourceSubresources defines the status and scale subresources for CustomResources. */
export interface CustomResourceSubresources {
  scale?: CustomResourceSubresourceScale;
  status?: CustomResourceSubresourceStatus;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation */
/* CustomResourceValidation is a list of validation methods for CustomResources. */
export interface CustomResourceValidation {
  openAPIV3Schema?: JSONSchemaProps;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ExternalDocumentation */
/* ExternalDocumentation allows referencing an external resource for extended documentation. */
export interface ExternalDocumentation {
  description?: string;
  url?: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON */
/* JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil. */
export type JSON = {
  [key: string]: unknown;
};
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps */
/* JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/). */
export interface JSONSchemaProps {
  $ref?: string;
  $schema?: string;
  additionalItems?: JSONSchemaPropsOrBool;
  additionalProperties?: JSONSchemaPropsOrBool;
  allOf?: JSONSchemaProps[];
  anyOf?: JSONSchemaProps[];
  default?: JSON;
  definitions?: {
    [key: string]: unknown;
  };
  dependencies?: {
    [key: string]: unknown;
  };
  description?: string;
  enum?: JSON[];
  example?: JSON;
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  externalDocs?: ExternalDocumentation;
  format?: string;
  id?: string;
  items?: JSONSchemaPropsOrArray;
  maxItems?: number;
  maxLength?: number;
  maxProperties?: number;
  maximum?: number;
  minItems?: number;
  minLength?: number;
  minProperties?: number;
  minimum?: number;
  multipleOf?: number;
  not?: JSONSchemaProps;
  nullable?: boolean;
  oneOf?: JSONSchemaProps[];
  pattern?: string;
  patternProperties?: {
    [key: string]: unknown;
  };
  properties?: {
    [key: string]: unknown;
  };
  required?: string[];
  title?: string;
  type?: string;
  uniqueItems?: boolean;
  "x-kubernetes-embedded-resource"?: boolean;
  "x-kubernetes-int-or-string"?: boolean;
  "x-kubernetes-list-map-keys"?: string[];
  "x-kubernetes-list-type"?: string;
  "x-kubernetes-map-type"?: string;
  "x-kubernetes-preserve-unknown-fields"?: boolean;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrArray */
/* JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes. */
export type JSONSchemaPropsOrArray = any;
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool */
/* JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property. */
export type JSONSchemaPropsOrBool = {
  title: string;
  type: string;
} | boolean;
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray */
/* JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array. */
export type JSONSchemaPropsOrStringArray = {
  title: string;
  type: string;
} | string[];
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference */
/* ServiceReference holds a reference to Service.legacy.k8s.io */
export interface ServiceReference {
  name: string;
  namespace: string;
  path?: string;
  port?: number;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig */
/* WebhookClientConfig contains the information to make a TLS connection with the webhook. */
export interface WebhookClientConfig {
  caBundle?: string;
  service?: ServiceReference;
  url?: string;
}
/* io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion */
/* WebhookConversion describes how to call a conversion webhook */
export interface WebhookConversion {
  clientConfig?: WebhookClientConfig;
  conversionReviewVersions: string[];
}
/* io.k8s.apimachinery.pkg.api.resource.Quantity */
/* Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.

The serialization format is:

<quantity>        ::= <signedNumber><suffix>
  (Note that <suffix> may be empty, from the "" case in <decimalSI>.)
<digit>           ::= 0 | 1 | ... | 9 <digits>          ::= <digit> | <digit><digits> <number>          ::= <digits> | <digits>.<digits> | <digits>. | .<digits> <sign>            ::= "+" | "-" <signedNumber>    ::= <number> | <sign><number> <suffix>          ::= <binarySI> | <decimalExponent> | <decimalSI> <binarySI>        ::= Ki | Mi | Gi | Ti | Pi | Ei
  (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)
<decimalSI>       ::= m | "" | k | M | G | T | P | E
  (Note that 1024 = 1Ki but 1000 = 1k; I didn't choose the capitalization.)
<decimalExponent> ::= "e" <signedNumber> | "E" <signedNumber>

No matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.

When a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.

Before serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:
  a. No precision is lost
  b. No fractional digits will be emitted
  c. The exponent (or suffix) is as large as possible.
The sign will be omitted unless the number is negative.

Examples:
  1.5 will be serialized as "1500m"
  1.5Gi will be serialized as "1536Mi"

Note that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.

Non-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don't diff.)

This format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation. */
export type Quantity = string;
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIGroup */
/* APIGroup contains the name, the supported versions, and the preferred version of a group. */
export interface APIGroup {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: GroupVersionForDiscovery;
  serverAddressByClientCIDRs?: ServerAddressByClientCIDR[];
  versions: GroupVersionForDiscovery[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIGroupList */
/* APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis. */
export interface APIGroupList {
  apiVersion?: string;
  groups: APIGroup[];
  kind?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIResource */
/* APIResource specifies the name of a resource and whether it is namespaced. */
export interface APIResource {
  categories?: string[];
  group?: string;
  kind: string;
  name: string;
  namespaced: boolean;
  shortNames?: string[];
  singularName: string;
  storageVersionHash?: string;
  verbs: string[];
  version?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList */
/* APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced. */
export interface APIResourceList {
  apiVersion?: string;
  groupVersion: string;
  kind?: string;
  resources: APIResource[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.APIVersions */
/* APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API. */
export interface APIVersions {
  apiVersion?: string;
  kind?: string;
  serverAddressByClientCIDRs: ServerAddressByClientCIDR[];
  versions: string[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Condition */
/* Condition contains details for one aspect of the current state of this API Resource. */
export interface Condition {
  lastTransitionTime: Time;
  message: string;
  observedGeneration?: number;
  reason: string;
  status: string;
  type: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions */
/* DeleteOptions may be provided when deleting an API object. */
export interface DeleteOptions {
  apiVersion?: string;
  dryRun?: string[];
  gracePeriodSeconds?: number;
  kind?: string;
  orphanDependents?: boolean;
  preconditions?: Preconditions;
  propagationPolicy?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1 */
/* FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.

Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.

The exact format is defined in sigs.k8s.io/structured-merge-diff */
export type FieldsV1 = {
  [key: string]: unknown;
};
/* io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery */
/* GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility. */
export interface GroupVersionForDiscovery {
  groupVersion: string;
  version: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector */
/* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects. */
export interface LabelSelector {
  matchExpressions?: LabelSelectorRequirement[];
  matchLabels?: {
    [key: string]: unknown;
  };
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement */
/* A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values. */
export interface LabelSelectorRequirement {
  key: string;
  operator: string;
  values?: string[];
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta */
/* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}. */
export interface ListMeta {
  continue?: string;
  remainingItemCount?: number;
  resourceVersion?: string;
  selfLink?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry */
/* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to. */
export interface ManagedFieldsEntry {
  apiVersion?: string;
  fieldsType?: string;
  fieldsV1?: FieldsV1;
  manager?: string;
  operation?: string;
  subresource?: string;
  time?: Time;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime */
/* MicroTime is version of Time with microsecond level precision. */
export type MicroTime = string;
/* io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta */
/* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
export interface ObjectMeta {
  annotations?: {
    [key: string]: unknown;
  };
  clusterName?: string;
  creationTimestamp?: Time;
  deletionGracePeriodSeconds?: number;
  deletionTimestamp?: Time;
  finalizers?: string[];
  generateName?: string;
  generation?: number;
  labels?: {
    [key: string]: unknown;
  };
  managedFields?: ManagedFieldsEntry[];
  name?: string;
  namespace?: string;
  ownerReferences?: OwnerReference[];
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference */
/* OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field. */
export interface OwnerReference {
  apiVersion: string;
  blockOwnerDeletion?: boolean;
  controller?: boolean;
  kind: string;
  name: string;
  uid: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Patch */
/* Patch is provided to give a concrete name and type to the Kubernetes PATCH request body. */
export type Patch = {
  [key: string]: unknown;
};
/* io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions */
/* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out. */
export interface Preconditions {
  resourceVersion?: string;
  uid?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR */
/* ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match. */
export interface ServerAddressByClientCIDR {
  clientCIDR: string;
  serverAddress: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Status */
/* Status is a return value for calls that don't return other objects. */
export interface Status {
  apiVersion?: string;
  code?: number;
  details?: StatusDetails;
  kind?: string;
  message?: string;
  metadata?: ListMeta;
  reason?: string;
  status?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause */
/* StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
export interface StatusCause {
  field?: string;
  message?: string;
  reason?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails */
/* StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
export interface StatusDetails {
  causes?: StatusCause[];
  group?: string;
  kind?: string;
  name?: string;
  retryAfterSeconds?: number;
  uid?: string;
}
/* io.k8s.apimachinery.pkg.apis.meta.v1.Time */
/* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. */
export type Time = string;
/* io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent */
/* Event represents a single event to a watched resource. */
export interface WatchEvent {
  object: RawExtension;
  type: string;
}
/* io.k8s.apimachinery.pkg.runtime.RawExtension */
/* RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.Object `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// External package: type MyAPIObject struct {
	runtime.TypeMeta `json:",inline"`
	MyPlugin runtime.RawExtension `json:"myPlugin"`
} type PluginA struct {
	AOption string `json:"aOption"`
}

// On the wire, the JSON will look something like this: {
	"kind":"MyAPIObject",
	"apiVersion":"v1",
	"myPlugin": {
		"kind":"PluginA",
		"aOption":"foo",
	},
}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.) */
export type RawExtension = {
  [key: string]: unknown;
};
/* io.k8s.apimachinery.pkg.util.intstr.IntOrString */
/* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number. */
export type IntOrString = string;
/* io.k8s.apimachinery.pkg.version.Info */
/* Info contains versioning information. how we'll want to distribute that information. */
export interface Info {
  buildDate: string;
  compiler: string;
  gitCommit: string;
  gitTreeState: string;
  gitVersion: string;
  goVersion: string;
  major: string;
  minor: string;
  platform: string;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService */
/* APIService represents a server for a particular GroupVersion. Name must be "version.group". */
export interface APIService {
  apiVersion?: string;
  kind?: string;
  metadata?: ObjectMeta;
  spec?: APIServiceSpec;
  status?: APIServiceStatus;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceCondition */
/* APIServiceCondition describes the state of an APIService at a particular point */
export interface APIServiceCondition {
  lastTransitionTime?: Time;
  message?: string;
  reason?: string;
  status: string;
  type: string;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList */
/* APIServiceList is a list of APIService objects. */
export interface APIServiceList {
  apiVersion?: string;
  items: APIService[];
  kind?: string;
  metadata?: ListMeta;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec */
/* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification. */
export interface APIServiceSpec {
  caBundle?: string;
  group?: string;
  groupPriorityMinimum: number;
  insecureSkipTLSVerify?: boolean;
  service?: ServiceReference;
  version?: string;
  versionPriority: number;
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceStatus */
/* APIServiceStatus contains derived information about an API server */
export interface APIServiceStatus {
  conditions?: APIServiceCondition[];
}
/* io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.ServiceReference */
/* ServiceReference holds a reference to Service.legacy.k8s.io */
export interface ServiceReference {
  name?: string;
  namespace?: string;
  port?: number;
}
export type Kubernetes = any;