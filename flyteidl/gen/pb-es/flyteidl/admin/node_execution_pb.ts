// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file flyteidl/admin/node_execution.proto (package flyteidl.admin, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Identifier, NodeExecutionIdentifier, TaskExecutionIdentifier, WorkflowExecutionIdentifier } from "../core/identifier_pb.js";
import { FlyteURLs, Sort, UrlBlob } from "./common_pb.js";
import { ExecutionError, NodeExecution_Phase } from "../core/execution_pb.js";
import { LiteralMap } from "../core/literals_pb.js";
import { CatalogCacheStatus, CatalogMetadata } from "../core/catalog_pb.js";
import { CompiledWorkflowClosure } from "../core/compiler_pb.js";
import { VariableMap } from "../core/interface_pb.js";

/**
 * A message used to fetch a single node execution entity.
 * See :ref:`ref_flyteidl.admin.NodeExecution` for more details
 *
 * @generated from message flyteidl.admin.NodeExecutionGetRequest
 */
export class NodeExecutionGetRequest extends Message<NodeExecutionGetRequest> {
  /**
   * Uniquely identifies an individual node execution.
   * +required
   *
   * @generated from field: flyteidl.core.NodeExecutionIdentifier id = 1;
   */
  id?: NodeExecutionIdentifier;

  constructor(data?: PartialMessage<NodeExecutionGetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionGetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: NodeExecutionIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionGetRequest {
    return new NodeExecutionGetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionGetRequest {
    return new NodeExecutionGetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionGetRequest {
    return new NodeExecutionGetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionGetRequest | PlainMessage<NodeExecutionGetRequest> | undefined, b: NodeExecutionGetRequest | PlainMessage<NodeExecutionGetRequest> | undefined): boolean {
    return proto3.util.equals(NodeExecutionGetRequest, a, b);
  }
}

/**
 * Represents a request structure to retrieve a list of node execution entities.
 * See :ref:`ref_flyteidl.admin.NodeExecution` for more details
 *
 * @generated from message flyteidl.admin.NodeExecutionListRequest
 */
export class NodeExecutionListRequest extends Message<NodeExecutionListRequest> {
  /**
   * Indicates the workflow execution to filter by.
   * +required
   *
   * @generated from field: flyteidl.core.WorkflowExecutionIdentifier workflow_execution_id = 1;
   */
  workflowExecutionId?: WorkflowExecutionIdentifier;

  /**
   * Indicates the number of resources to be returned.
   * +required
   *
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * @generated from field: string token = 3;
   */
  token = "";

  /**
   * Indicates a list of filters passed as string.
   * More info on constructing filters : <Link>
   * +optional
   *
   * @generated from field: string filters = 4;
   */
  filters = "";

  /**
   * Sort ordering.
   * +optional
   *
   * @generated from field: flyteidl.admin.Sort sort_by = 5;
   */
  sortBy?: Sort;

  /**
   * Unique identifier of the parent node in the execution
   * +optional
   *
   * @generated from field: string unique_parent_id = 6;
   */
  uniqueParentId = "";

  constructor(data?: PartialMessage<NodeExecutionListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "workflow_execution_id", kind: "message", T: WorkflowExecutionIdentifier },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filters", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "sort_by", kind: "message", T: Sort },
    { no: 6, name: "unique_parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionListRequest {
    return new NodeExecutionListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionListRequest {
    return new NodeExecutionListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionListRequest {
    return new NodeExecutionListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionListRequest | PlainMessage<NodeExecutionListRequest> | undefined, b: NodeExecutionListRequest | PlainMessage<NodeExecutionListRequest> | undefined): boolean {
    return proto3.util.equals(NodeExecutionListRequest, a, b);
  }
}

/**
 * Represents a request structure to retrieve a list of node execution entities launched by a specific task.
 * This can arise when a task yields a subworkflow.
 *
 * @generated from message flyteidl.admin.NodeExecutionForTaskListRequest
 */
export class NodeExecutionForTaskListRequest extends Message<NodeExecutionForTaskListRequest> {
  /**
   * Indicates the node execution to filter by.
   * +required
   *
   * @generated from field: flyteidl.core.TaskExecutionIdentifier task_execution_id = 1;
   */
  taskExecutionId?: TaskExecutionIdentifier;

  /**
   * Indicates the number of resources to be returned.
   * +required
   *
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  /**
   * In the case of multiple pages of results, the, server-provided token can be used to fetch the next page
   * in a query.
   * +optional
   *
   * @generated from field: string token = 3;
   */
  token = "";

  /**
   * Indicates a list of filters passed as string.
   * More info on constructing filters : <Link>
   * +optional
   *
   * @generated from field: string filters = 4;
   */
  filters = "";

  /**
   * Sort ordering.
   * +optional
   *
   * @generated from field: flyteidl.admin.Sort sort_by = 5;
   */
  sortBy?: Sort;

  constructor(data?: PartialMessage<NodeExecutionForTaskListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionForTaskListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "task_execution_id", kind: "message", T: TaskExecutionIdentifier },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "filters", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "sort_by", kind: "message", T: Sort },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionForTaskListRequest {
    return new NodeExecutionForTaskListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionForTaskListRequest {
    return new NodeExecutionForTaskListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionForTaskListRequest {
    return new NodeExecutionForTaskListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionForTaskListRequest | PlainMessage<NodeExecutionForTaskListRequest> | undefined, b: NodeExecutionForTaskListRequest | PlainMessage<NodeExecutionForTaskListRequest> | undefined): boolean {
    return proto3.util.equals(NodeExecutionForTaskListRequest, a, b);
  }
}

/**
 * Encapsulates all details for a single node execution entity.
 * A node represents a component in the overall workflow graph. A node launch a task, multiple tasks, an entire nested
 * sub-workflow, or even a separate child-workflow execution.
 * The same task can be called repeatedly in a single workflow but each node is unique.
 *
 * @generated from message flyteidl.admin.NodeExecution
 */
export class NodeExecution extends Message<NodeExecution> {
  /**
   * Uniquely identifies an individual node execution.
   *
   * @generated from field: flyteidl.core.NodeExecutionIdentifier id = 1;
   */
  id?: NodeExecutionIdentifier;

  /**
   * Path to remote data store where input blob is stored.
   *
   * @generated from field: string input_uri = 2;
   */
  inputUri = "";

  /**
   * Computed results associated with this node execution.
   *
   * @generated from field: flyteidl.admin.NodeExecutionClosure closure = 3;
   */
  closure?: NodeExecutionClosure;

  /**
   * Metadata for Node Execution
   *
   * @generated from field: flyteidl.admin.NodeExecutionMetaData metadata = 4;
   */
  metadata?: NodeExecutionMetaData;

  constructor(data?: PartialMessage<NodeExecution>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecution";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: NodeExecutionIdentifier },
    { no: 2, name: "input_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "closure", kind: "message", T: NodeExecutionClosure },
    { no: 4, name: "metadata", kind: "message", T: NodeExecutionMetaData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecution {
    return new NodeExecution().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecution {
    return new NodeExecution().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecution {
    return new NodeExecution().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecution | PlainMessage<NodeExecution> | undefined, b: NodeExecution | PlainMessage<NodeExecution> | undefined): boolean {
    return proto3.util.equals(NodeExecution, a, b);
  }
}

/**
 * Represents additional attributes related to a Node Execution
 *
 * @generated from message flyteidl.admin.NodeExecutionMetaData
 */
export class NodeExecutionMetaData extends Message<NodeExecutionMetaData> {
  /**
   * Node executions are grouped depending on retries of the parent
   * Retry group is unique within the context of a parent node.
   *
   * @generated from field: string retry_group = 1;
   */
  retryGroup = "";

  /**
   * Boolean flag indicating if the node has child nodes under it
   * This can be true when a node contains a dynamic workflow which then produces
   * child nodes.
   *
   * @generated from field: bool is_parent_node = 2;
   */
  isParentNode = false;

  /**
   * Node id of the node in the original workflow
   * This maps to value of WorkflowTemplate.nodes[X].id
   *
   * @generated from field: string spec_node_id = 3;
   */
  specNodeId = "";

  /**
   * Boolean flag indicating if the node has contains a dynamic workflow which then produces child nodes.
   * This is to distinguish between subworkflows and dynamic workflows which can both have is_parent_node as true.
   *
   * @generated from field: bool is_dynamic = 4;
   */
  isDynamic = false;

  /**
   * Boolean flag indicating if the node is an array node. This is intended to uniquely identify
   * array nodes from other nodes which can have is_parent_node as true.
   *
   * @generated from field: bool is_array = 5;
   */
  isArray = false;

  /**
   * Whether this node is an eager node.
   *
   * @generated from field: bool is_eager = 6;
   */
  isEager = false;

  constructor(data?: PartialMessage<NodeExecutionMetaData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionMetaData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "retry_group", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_parent_node", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "spec_node_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_dynamic", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "is_array", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "is_eager", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionMetaData {
    return new NodeExecutionMetaData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionMetaData {
    return new NodeExecutionMetaData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionMetaData {
    return new NodeExecutionMetaData().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionMetaData | PlainMessage<NodeExecutionMetaData> | undefined, b: NodeExecutionMetaData | PlainMessage<NodeExecutionMetaData> | undefined): boolean {
    return proto3.util.equals(NodeExecutionMetaData, a, b);
  }
}

/**
 * Request structure to retrieve a list of node execution entities.
 * See :ref:`ref_flyteidl.admin.NodeExecution` for more details
 *
 * @generated from message flyteidl.admin.NodeExecutionList
 */
export class NodeExecutionList extends Message<NodeExecutionList> {
  /**
   * @generated from field: repeated flyteidl.admin.NodeExecution node_executions = 1;
   */
  nodeExecutions: NodeExecution[] = [];

  /**
   * In the case of multiple pages of results, the server-provided token can be used to fetch the next page
   * in a query. If there are no more results, this value will be empty.
   *
   * @generated from field: string token = 2;
   */
  token = "";

  constructor(data?: PartialMessage<NodeExecutionList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "node_executions", kind: "message", T: NodeExecution, repeated: true },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionList {
    return new NodeExecutionList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionList {
    return new NodeExecutionList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionList {
    return new NodeExecutionList().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionList | PlainMessage<NodeExecutionList> | undefined, b: NodeExecutionList | PlainMessage<NodeExecutionList> | undefined): boolean {
    return proto3.util.equals(NodeExecutionList, a, b);
  }
}

/**
 * Container for node execution details and results.
 *
 * @generated from message flyteidl.admin.NodeExecutionClosure
 */
export class NodeExecutionClosure extends Message<NodeExecutionClosure> {
  /**
   * Only a node in a terminal state will have a non-empty output_result.
   *
   * @generated from oneof flyteidl.admin.NodeExecutionClosure.output_result
   */
  outputResult: {
    /**
     * Links to a remotely stored, serialized core.LiteralMap of node execution outputs.
     * DEPRECATED. Use GetNodeExecutionData to fetch output data instead.
     *
     * @generated from field: string output_uri = 1 [deprecated = true];
     * @deprecated
     */
    value: string;
    case: "outputUri";
  } | {
    /**
     * Error information for the Node
     *
     * @generated from field: flyteidl.core.ExecutionError error = 2;
     */
    value: ExecutionError;
    case: "error";
  } | {
    /**
     * Raw output data produced by this node execution.
     * DEPRECATED. Use GetNodeExecutionData to fetch output data instead.
     *
     * @generated from field: flyteidl.core.LiteralMap output_data = 10 [deprecated = true];
     * @deprecated
     */
    value: LiteralMap;
    case: "outputData";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * The last recorded phase for this node execution.
   *
   * @generated from field: flyteidl.core.NodeExecution.Phase phase = 3;
   */
  phase = NodeExecution_Phase.UNDEFINED;

  /**
   * Time at which the node execution began running.
   *
   * @generated from field: google.protobuf.Timestamp started_at = 4;
   */
  startedAt?: Timestamp;

  /**
   * The amount of time the node execution spent running.
   *
   * @generated from field: google.protobuf.Duration duration = 5;
   */
  duration?: Duration;

  /**
   * Time at which the node execution was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  /**
   * Time at which the node execution was last updated.
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: Timestamp;

  /**
   * Store metadata for what the node launched.
   * for ex: if this is a workflow node, we store information for the launched workflow.
   *
   * @generated from oneof flyteidl.admin.NodeExecutionClosure.target_metadata
   */
  targetMetadata: {
    /**
     * @generated from field: flyteidl.admin.WorkflowNodeMetadata workflow_node_metadata = 8;
     */
    value: WorkflowNodeMetadata;
    case: "workflowNodeMetadata";
  } | {
    /**
     * @generated from field: flyteidl.admin.TaskNodeMetadata task_node_metadata = 9;
     */
    value: TaskNodeMetadata;
    case: "taskNodeMetadata";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * String location uniquely identifying where the deck HTML file is.
   * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
   *
   * @generated from field: string deck_uri = 11;
   */
  deckUri = "";

  /**
   * dynamic_job_spec_uri is the location of the DynamicJobSpec proto message for a DynamicWorkflow. This is required
   * to correctly recover partially completed executions where the subworkflow has already been compiled.
   *
   * @generated from field: string dynamic_job_spec_uri = 12;
   */
  dynamicJobSpecUri = "";

  constructor(data?: PartialMessage<NodeExecutionClosure>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionClosure";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "output_uri", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "output_result" },
    { no: 2, name: "error", kind: "message", T: ExecutionError, oneof: "output_result" },
    { no: 10, name: "output_data", kind: "message", T: LiteralMap, oneof: "output_result" },
    { no: 3, name: "phase", kind: "enum", T: proto3.getEnumType(NodeExecution_Phase) },
    { no: 4, name: "started_at", kind: "message", T: Timestamp },
    { no: 5, name: "duration", kind: "message", T: Duration },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
    { no: 7, name: "updated_at", kind: "message", T: Timestamp },
    { no: 8, name: "workflow_node_metadata", kind: "message", T: WorkflowNodeMetadata, oneof: "target_metadata" },
    { no: 9, name: "task_node_metadata", kind: "message", T: TaskNodeMetadata, oneof: "target_metadata" },
    { no: 11, name: "deck_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "dynamic_job_spec_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionClosure {
    return new NodeExecutionClosure().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionClosure {
    return new NodeExecutionClosure().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionClosure {
    return new NodeExecutionClosure().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionClosure | PlainMessage<NodeExecutionClosure> | undefined, b: NodeExecutionClosure | PlainMessage<NodeExecutionClosure> | undefined): boolean {
    return proto3.util.equals(NodeExecutionClosure, a, b);
  }
}

/**
 * Metadata for a WorkflowNode
 *
 * @generated from message flyteidl.admin.WorkflowNodeMetadata
 */
export class WorkflowNodeMetadata extends Message<WorkflowNodeMetadata> {
  /**
   * The identifier for a workflow execution launched by a node.
   *
   * @generated from field: flyteidl.core.WorkflowExecutionIdentifier executionId = 1;
   */
  executionId?: WorkflowExecutionIdentifier;

  constructor(data?: PartialMessage<WorkflowNodeMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.WorkflowNodeMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "executionId", kind: "message", T: WorkflowExecutionIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowNodeMetadata {
    return new WorkflowNodeMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowNodeMetadata {
    return new WorkflowNodeMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowNodeMetadata {
    return new WorkflowNodeMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: WorkflowNodeMetadata | PlainMessage<WorkflowNodeMetadata> | undefined, b: WorkflowNodeMetadata | PlainMessage<WorkflowNodeMetadata> | undefined): boolean {
    return proto3.util.equals(WorkflowNodeMetadata, a, b);
  }
}

/**
 * Metadata for the case in which the node is a TaskNode
 *
 * @generated from message flyteidl.admin.TaskNodeMetadata
 */
export class TaskNodeMetadata extends Message<TaskNodeMetadata> {
  /**
   * Captures the status of caching for this execution.
   *
   * @generated from field: flyteidl.core.CatalogCacheStatus cache_status = 1;
   */
  cacheStatus = CatalogCacheStatus.CACHE_DISABLED;

  /**
   * This structure carries the catalog artifact information
   *
   * @generated from field: flyteidl.core.CatalogMetadata catalog_key = 2;
   */
  catalogKey?: CatalogMetadata;

  /**
   * The latest checkpoint location
   *
   * @generated from field: string checkpoint_uri = 4;
   */
  checkpointUri = "";

  constructor(data?: PartialMessage<TaskNodeMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.TaskNodeMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cache_status", kind: "enum", T: proto3.getEnumType(CatalogCacheStatus) },
    { no: 2, name: "catalog_key", kind: "message", T: CatalogMetadata },
    { no: 4, name: "checkpoint_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaskNodeMetadata {
    return new TaskNodeMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaskNodeMetadata {
    return new TaskNodeMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaskNodeMetadata {
    return new TaskNodeMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: TaskNodeMetadata | PlainMessage<TaskNodeMetadata> | undefined, b: TaskNodeMetadata | PlainMessage<TaskNodeMetadata> | undefined): boolean {
    return proto3.util.equals(TaskNodeMetadata, a, b);
  }
}

/**
 * For dynamic workflow nodes we capture information about the dynamic workflow definition that gets generated.
 *
 * @generated from message flyteidl.admin.DynamicWorkflowNodeMetadata
 */
export class DynamicWorkflowNodeMetadata extends Message<DynamicWorkflowNodeMetadata> {
  /**
   * id represents the unique identifier of the workflow.
   *
   * @generated from field: flyteidl.core.Identifier id = 1;
   */
  id?: Identifier;

  /**
   * Represents the compiled representation of the embedded dynamic workflow.
   *
   * @generated from field: flyteidl.core.CompiledWorkflowClosure compiled_workflow = 2;
   */
  compiledWorkflow?: CompiledWorkflowClosure;

  /**
   * dynamic_job_spec_uri is the location of the DynamicJobSpec proto message for this DynamicWorkflow. This is
   * required to correctly recover partially completed executions where the subworkflow has already been compiled.
   *
   * @generated from field: string dynamic_job_spec_uri = 3;
   */
  dynamicJobSpecUri = "";

  constructor(data?: PartialMessage<DynamicWorkflowNodeMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.DynamicWorkflowNodeMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: Identifier },
    { no: 2, name: "compiled_workflow", kind: "message", T: CompiledWorkflowClosure },
    { no: 3, name: "dynamic_job_spec_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicWorkflowNodeMetadata {
    return new DynamicWorkflowNodeMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicWorkflowNodeMetadata {
    return new DynamicWorkflowNodeMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicWorkflowNodeMetadata {
    return new DynamicWorkflowNodeMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: DynamicWorkflowNodeMetadata | PlainMessage<DynamicWorkflowNodeMetadata> | undefined, b: DynamicWorkflowNodeMetadata | PlainMessage<DynamicWorkflowNodeMetadata> | undefined): boolean {
    return proto3.util.equals(DynamicWorkflowNodeMetadata, a, b);
  }
}

/**
 * Request structure to fetch inputs and output for a node execution.
 * By default, these are not returned in :ref:`ref_flyteidl.admin.NodeExecutionGetRequest`
 *
 * @generated from message flyteidl.admin.NodeExecutionGetDataRequest
 */
export class NodeExecutionGetDataRequest extends Message<NodeExecutionGetDataRequest> {
  /**
   * The identifier of the node execution for which to fetch inputs and outputs.
   *
   * @generated from field: flyteidl.core.NodeExecutionIdentifier id = 1;
   */
  id?: NodeExecutionIdentifier;

  constructor(data?: PartialMessage<NodeExecutionGetDataRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionGetDataRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: NodeExecutionIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionGetDataRequest {
    return new NodeExecutionGetDataRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionGetDataRequest {
    return new NodeExecutionGetDataRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionGetDataRequest {
    return new NodeExecutionGetDataRequest().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionGetDataRequest | PlainMessage<NodeExecutionGetDataRequest> | undefined, b: NodeExecutionGetDataRequest | PlainMessage<NodeExecutionGetDataRequest> | undefined): boolean {
    return proto3.util.equals(NodeExecutionGetDataRequest, a, b);
  }
}

/**
 * Response structure for NodeExecutionGetDataRequest which contains inputs and outputs for a node execution.
 *
 * @generated from message flyteidl.admin.NodeExecutionGetDataResponse
 */
export class NodeExecutionGetDataResponse extends Message<NodeExecutionGetDataResponse> {
  /**
   * Signed url to fetch a core.LiteralMap of node execution inputs.
   * Deprecated: Please use full_inputs instead.
   *
   * @generated from field: flyteidl.admin.UrlBlob inputs = 1 [deprecated = true];
   * @deprecated
   */
  inputs?: UrlBlob;

  /**
   * Signed url to fetch a core.LiteralMap of node execution outputs.
   * Deprecated: Please use full_outputs instead.
   *
   * @generated from field: flyteidl.admin.UrlBlob outputs = 2 [deprecated = true];
   * @deprecated
   */
  outputs?: UrlBlob;

  /**
   * Full_inputs will only be populated if they are under a configured size threshold.
   *
   * @generated from field: flyteidl.core.LiteralMap full_inputs = 3;
   */
  fullInputs?: LiteralMap;

  /**
   * Full_outputs will only be populated if they are under a configured size threshold. 
   *
   * @generated from field: flyteidl.core.LiteralMap full_outputs = 4;
   */
  fullOutputs?: LiteralMap;

  /**
   * Optional Workflow closure for a dynamically generated workflow, in the case this node yields a dynamic workflow we return its structure here.
   *
   * @generated from field: flyteidl.admin.DynamicWorkflowNodeMetadata dynamic_workflow = 16;
   */
  dynamicWorkflow?: DynamicWorkflowNodeMetadata;

  /**
   * @generated from field: flyteidl.admin.FlyteURLs flyte_urls = 17;
   */
  flyteUrls?: FlyteURLs;

  /**
   * @generated from field: flyteidl.core.VariableMap output_variable_map = 18;
   */
  outputVariableMap?: VariableMap;

  constructor(data?: PartialMessage<NodeExecutionGetDataResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.NodeExecutionGetDataResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "inputs", kind: "message", T: UrlBlob },
    { no: 2, name: "outputs", kind: "message", T: UrlBlob },
    { no: 3, name: "full_inputs", kind: "message", T: LiteralMap },
    { no: 4, name: "full_outputs", kind: "message", T: LiteralMap },
    { no: 16, name: "dynamic_workflow", kind: "message", T: DynamicWorkflowNodeMetadata },
    { no: 17, name: "flyte_urls", kind: "message", T: FlyteURLs },
    { no: 18, name: "output_variable_map", kind: "message", T: VariableMap },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeExecutionGetDataResponse {
    return new NodeExecutionGetDataResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeExecutionGetDataResponse {
    return new NodeExecutionGetDataResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeExecutionGetDataResponse {
    return new NodeExecutionGetDataResponse().fromJsonString(jsonString, options);
  }

  static equals(a: NodeExecutionGetDataResponse | PlainMessage<NodeExecutionGetDataResponse> | undefined, b: NodeExecutionGetDataResponse | PlainMessage<NodeExecutionGetDataResponse> | undefined): boolean {
    return proto3.util.equals(NodeExecutionGetDataResponse, a, b);
  }
}

/**
 * @generated from message flyteidl.admin.GetDynamicNodeWorkflowRequest
 */
export class GetDynamicNodeWorkflowRequest extends Message<GetDynamicNodeWorkflowRequest> {
  /**
   * @generated from field: flyteidl.core.NodeExecutionIdentifier id = 1;
   */
  id?: NodeExecutionIdentifier;

  constructor(data?: PartialMessage<GetDynamicNodeWorkflowRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.GetDynamicNodeWorkflowRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "message", T: NodeExecutionIdentifier },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDynamicNodeWorkflowRequest {
    return new GetDynamicNodeWorkflowRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDynamicNodeWorkflowRequest {
    return new GetDynamicNodeWorkflowRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDynamicNodeWorkflowRequest {
    return new GetDynamicNodeWorkflowRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetDynamicNodeWorkflowRequest | PlainMessage<GetDynamicNodeWorkflowRequest> | undefined, b: GetDynamicNodeWorkflowRequest | PlainMessage<GetDynamicNodeWorkflowRequest> | undefined): boolean {
    return proto3.util.equals(GetDynamicNodeWorkflowRequest, a, b);
  }
}

/**
 * @generated from message flyteidl.admin.DynamicNodeWorkflowResponse
 */
export class DynamicNodeWorkflowResponse extends Message<DynamicNodeWorkflowResponse> {
  /**
   * @generated from field: flyteidl.core.CompiledWorkflowClosure compiled_workflow = 1;
   */
  compiledWorkflow?: CompiledWorkflowClosure;

  constructor(data?: PartialMessage<DynamicNodeWorkflowResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "flyteidl.admin.DynamicNodeWorkflowResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "compiled_workflow", kind: "message", T: CompiledWorkflowClosure },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DynamicNodeWorkflowResponse {
    return new DynamicNodeWorkflowResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DynamicNodeWorkflowResponse {
    return new DynamicNodeWorkflowResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DynamicNodeWorkflowResponse {
    return new DynamicNodeWorkflowResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DynamicNodeWorkflowResponse | PlainMessage<DynamicNodeWorkflowResponse> | undefined, b: DynamicNodeWorkflowResponse | PlainMessage<DynamicNodeWorkflowResponse> | undefined): boolean {
    return proto3.util.equals(DynamicNodeWorkflowResponse, a, b);
  }
}

