// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "request.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Request
 */
export interface Request {
    /**
     * @generated from protobuf field: Context context = 1;
     */
    context?: Context;
}
/**
 * @generated from protobuf message Context
 */
export interface Context {
    /**
     * @generated from protobuf field: AdSignalsInfo adSignalsInfo = 9;
     */
    adSignalsInfo?: AdSignalsInfo;
}
/**
 * @generated from protobuf message AdSignalsInfo
 */
export interface AdSignalsInfo {
    /**
     * @generated from protobuf field: repeated Params params = 1;
     */
    params: Params[];
}
/**
 * @generated from protobuf message Params
 */
export interface Params {
    /**
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf field: string value = 2;
     */
    value: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Request$Type extends MessageType<Request> {
    constructor() {
        super("Request", [
            { no: 1, name: "context", kind: "message", T: () => Context }
        ]);
    }
    create(value?: PartialMessage<Request>): Request {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Request>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Request): Request {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Context context */ 1:
                    message.context = Context.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Request, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Context context = 1; */
        if (message.context)
            Context.internalBinaryWrite(message.context, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Request
 */
export const Request = new Request$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Context$Type extends MessageType<Context> {
    constructor() {
        super("Context", [
            { no: 9, name: "adSignalsInfo", kind: "message", T: () => AdSignalsInfo }
        ]);
    }
    create(value?: PartialMessage<Context>): Context {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Context>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Context): Context {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* AdSignalsInfo adSignalsInfo */ 9:
                    message.adSignalsInfo = AdSignalsInfo.internalBinaryRead(reader, reader.uint32(), options, message.adSignalsInfo);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Context, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* AdSignalsInfo adSignalsInfo = 9; */
        if (message.adSignalsInfo)
            AdSignalsInfo.internalBinaryWrite(message.adSignalsInfo, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Context
 */
export const Context = new Context$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdSignalsInfo$Type extends MessageType<AdSignalsInfo> {
    constructor() {
        super("AdSignalsInfo", [
            { no: 1, name: "params", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Params }
        ]);
    }
    create(value?: PartialMessage<AdSignalsInfo>): AdSignalsInfo {
        const message = { params: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AdSignalsInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdSignalsInfo): AdSignalsInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Params params */ 1:
                    message.params.push(Params.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AdSignalsInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated Params params = 1; */
        for (let i = 0; i < message.params.length; i++)
            Params.internalBinaryWrite(message.params[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AdSignalsInfo
 */
export const AdSignalsInfo = new AdSignalsInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("Params", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { key: "", value: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string value */ 2:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string value = 2; */
        if (message.value !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Params
 */
export const Params = new Params$Type();
